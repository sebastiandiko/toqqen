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
import './i18n'; // Importamos la config, O BIEN:
import i18n from './i18n'; // si necesitas la referencia directa

// IMPORTAR I18nextProvider
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envuelve la app en I18nextProvider */}
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  </React.StrictMode>
);
