import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import DotRing from "./components/DotRing";
import MouseContextProvider, { MouseContext } from "./context/mouse-context";

import GradientBackground from "./components/GradientBackground";
import ZCardStack from "./components/ZCardStack";
import Navigation from "./components/Navigation";
import SkillSet from "./components/SkillSet";
import ContactMe from "./components/ContactMe";
import TranslationButtonToggle from "./components/TranslationButtoToggle";
import VideoGallery from "./components/VideoGallery";

import theme from "./components/colorTheme";
import { ThemeProvider } from "@mui/material/styles";

import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [location]);

  return (
    <MouseContextProvider>
      <ThemeProvider theme={theme}>
        <DotRing />
        <Navigation />
        <TranslationButtonToggle />
        <Routes>
          <Route
            path=""
            element={
              <div className="app-container">
                <GradientBackground />
                <div className="content-container">
                  <ZCardStack />
                </div>
              </div>
            }
          />
          <Route path="/skills" element={<SkillSet />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="/videoGallery" element={<VideoGallery />} />
        </Routes>
      </ThemeProvider>
    </MouseContextProvider>
  );
}

export default App;
