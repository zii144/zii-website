import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import GradientBackground from "./components/GradientBackground";
import ZCardStack from "./components/ZCardStack";
import Navigation from "./components/Navigation";
import Works from "./components/Works";
import SkillSet from "./components/SkillSet";

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
