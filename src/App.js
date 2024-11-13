import React, { useState } from 'react'
import ZCardStack from './components/ZCardStack';
import './App.css';
import GradientBackground from './components/GradientBackground';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <GradientBackground />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent:'center', height: '100%'}}>
        <ZCardStack />
      </div>
    </div>
  );
}

export default App;
