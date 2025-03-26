// src/components/Banner.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Banner.css';

const DEFAULT_NUM_ICONS = 50;

// Definición de los íconos con data URLs
const gearIcon = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#add8e6" viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 4.21l7 3.36v7.05l-7 3.5-7-3.5V7.57l7-3.36z"/></svg>'
);

const gridIcon = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#add8e6" viewBox="0 0 24 24"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zm-10 10h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>'
);

const iconSvgs = [gearIcon, gridIcon];

const generateIcons = (num) => {
  const icons = [];
  for (let i = 0; i < num; i++) {
    icons.push({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      svg: iconSvgs[Math.floor(Math.random() * iconSvgs.length)]
    });
  }
  return icons;
};

const Banner = ({ numIcons = DEFAULT_NUM_ICONS }) => {
  const [icons, setIcons] = useState(generateIcons(numIcons));
  const bannerRef = useRef(null);
  const animationRef = useRef();
  const lastTimeRef = useRef(Date.now());

  const animate = () => {
    const now = Date.now();
    const deltaTime = now - lastTimeRef.current;
    lastTimeRef.current = now;
    
    setIcons((prevIcons) =>
      prevIcons.map(icon => {
        let newTop = icon.top + icon.vy * deltaTime;
        let newLeft = icon.left + icon.vx * deltaTime;
        
        if (newTop < 0 || newTop > 100) {
          icon.vy = -icon.vy;
          newTop = Math.max(0, Math.min(100, newTop));
        }
        if (newLeft < 0 || newLeft > 100) {
          icon.vx = -icon.vx;
          newLeft = Math.max(0, Math.min(100, newLeft));
        }
        return { ...icon, top: newTop, left: newLeft };
      })
    );
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseMove = (e) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const threshold = 50;

    setIcons((prevIcons) =>
      prevIcons.map(icon => {
        const iconX = (icon.left / 100) * rect.width;
        const iconY = (icon.top / 100) * rect.height;
        const dx = iconX - mouseX;
        const dy = iconY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < threshold && distance > 0) {
          const repelForce = (threshold - distance) / threshold;
          const angle = Math.atan2(dy, dx);
          return {
            ...icon,
            vx: icon.vx + Math.cos(angle) * repelForce * 0.05,
            vy: icon.vy + Math.sin(angle) * repelForce * 0.05
          };
        }
        return icon;
      })
    );
  };

  return (
    <section
      className="banner"
      ref={bannerRef}
      onMouseMove={handleMouseMove}
    >
      <h1 className="title">
        <span className="to">to</span>
        <span className="qq">qq</span>
        <span className="en">en</span>
      </h1>
      {icons.map(icon => (
        <div
          key={icon.id}
          className="tech-icon"
          style={{
            top: `${icon.top}%`,
            left: `${icon.left}%`,
            backgroundImage: `url(${icon.svg})`
          }}
        />
      ))}
    </section>
  );
};

export default Banner;
