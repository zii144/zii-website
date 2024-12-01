import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import GradientBackground from "./components/GradientBackground";
import ZCardStack from "./components/ZCardStack";
import Navigation from "./components/Navigation";
import SkillSet from "./components/SkillSet";
import ContactMe from "./components/ContactMe";

import theme from "./components/colorTheme";
import { ThemeProvider } from "@mui/material/styles";

import { useTranslation } from "react-i18next";
import { useLocale } from "./LocaleContext";

function App() {
  const { t, i18n } = useTranslation();
  const { changeLanguage } = useLocale();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path=""
            element={
              <div className="app-container">
                <h1>
                  {t("current language")}: {i18n.language}
                </h1>
                <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("zh")}>
                  Traditional Chinese
                </button>
                <GradientBackground />
                <div className="content-container">
                  <ZCardStack />
                </div>
              </div>
            }
          />
          <Route path="/skills" element={<SkillSet />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
