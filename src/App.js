import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import GradientBackground from "./components/GradientBackground";
import ZCardStack from "./components/ZCardStack";
import Navigation from "./components/Navigation";
import SkillSet from "./components/SkillSet";
import ContactMe from "./components/ContactMe";

import theme from "./components/colorTheme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
