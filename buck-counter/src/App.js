import './App.css';
import HeaderBar from './components/common/headerBar';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslations from './locales/en.json';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Accounts from './pages/accounts';
import Transactions from './pages/transactions';

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
  },
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language if a translation is missing
  interpolation: {
    escapeValue: false, // React already escapes string content
  },
});

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/accounts" element={<Accounts />} />
        <Route exact path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}

export default App;
