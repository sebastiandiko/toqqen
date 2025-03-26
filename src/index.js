// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import LegalNotice from './components/LegalNotice.jsx';
import DeliveryPolicy from './components/DeliveryPolicy';
import './index.css';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/delivery-policy" element={<DeliveryPolicy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
