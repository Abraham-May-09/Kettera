import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('kettera_lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('kettera_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

export function T({ es, en }) {
  const { lang } = useLanguage();
  return lang === 'es' ? es : en;


}
export function useTranslate() {
  const { lang } = useLanguage();
  
  return (es, en) => {
    return lang === 'es' ? es : en;
  };
}