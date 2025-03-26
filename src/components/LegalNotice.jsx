// src/components/LegalNotice.jsx
import React from 'react';
import './LegalNotice.css';

const LegalNotice = () => {
  return (
    <div className="legal-notice">
      <div className="policy-container">
        <h1>Legal Notice</h1>
        <p className="policy-date">Effective Date: January 1, 2025</p>

        <section className="policy-section">
          <h2>General Information</h2>
          <p>
            Toqqen is registered and operating under the laws of Argentina. Our company is located at Corrientes. The information provided on this website is for general informational purposes only and may be subject to change without prior notice.
          </p>
        </section>

        <section className="policy-section">
          <h2>Disclaimer</h2>
          <p>
            The content on this website is provided "as is" without any representations or warranties, express or implied. Toqqen makes no representations or warranties regarding the accuracy, completeness, or suitability of the information contained on this site.
          </p>
        </section>

        <section className="policy-section">
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, images, logos, graphics, and software, is the property of toqqen or its licensors and is protected by copyright and trademark laws. Unauthorized use of any material may violate these laws.
          </p>
        </section>

        <section className="policy-section">
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall toqqen be liable for any direct, indirect, incidental, punitive, or consequential damages arising out of the use or inability to use this website or its content, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="policy-section">
          <h2>Governing Law</h2>
          <p>
            This Legal Notice shall be governed by and construed in accordance with the laws of Corrientes. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of Corrientes.
          </p>
        </section>

      </div>
    </div>
  );
};

export default LegalNotice;
