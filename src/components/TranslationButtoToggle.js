import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import i18n from "../i18n";
import { TbLanguage } from "react-icons/tb";

const TranslationToggle = () => {
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let timer;
    if (showText) {
      timer = setTimeout(() => setShowText(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [showText]);

  // Button click animation
  const clickAnimation = useSpring({
    scale: showText ? 1.2 : 1,
    config: { tension: 300, friction: 15 },
  });

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "zh" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);

    setShowText(true);
    startTimer();
  };

  const startTimer = () => {
    setTimeout(() => {
      setShowText(false);
    }, 1000);
  };

  return (
    <div
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}
    >
      {/* Button with Scaling Animation */}
      <animated.div style={{ ...clickAnimation, display: "inline-block" }}>
        <Button
          onClick={toggleLanguage}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "50px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TbLanguage size={24} style={{ marginRight: "8px" }} />
          {showText && (isEnglish ? "EN" : "ZH")}
        </Button>
      </animated.div>
    </div>
  );
};

export default TranslationToggle;
