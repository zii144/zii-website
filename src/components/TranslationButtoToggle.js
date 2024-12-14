import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import i18n from "../i18n";
import { animated, useSpringRef } from "@react-spring/web";

const TranslationToggle = () => {
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  // Spring animation for toggle button
  const animationProps = useSpringRef({
    backgroundColor: isEnglish ? "#4CAF50" : "#2196F3",
    color: "#fff",
    transform: isEnglish ? "scale(1.1)" : "scale(1)",
    config: { tension: 200, friction: 15 },
  });

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "zh" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return (
    <animated.div
      style={{ ...animationProps, padding: "10px", borderRadius: "5px" }}
    >
      <Button
        onClick={toggleLanguage}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "50px",
        }}
      >
        <Typography variant="button" component="div">
          {isEnglish ? "繁體中文" : "English"}
        </Typography>
      </Button>
    </animated.div>
  );
};

export default TranslationToggle;
