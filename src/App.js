import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import GradientBackground from "./components/GradientBackground";
import ZCardStack from "./components/ZCardStack";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <div className="app-container">
              <GradientBackground />
              <div className="content-container">
                <ZCardStack />
              </div>
              <Navigation />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
