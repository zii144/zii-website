import { createContext, useContext, React, useState } from "react";
import i18n from "./i18n";

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <LocaleContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
