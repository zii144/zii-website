import React, { useState } from "react";
import { Button } from "@mui/material";
import i18n from "../i18n";
import { animated, useSpring } from "@react-spring/web";
import { TbLanguage } from "react-icons/tb";

const TranslationToggle = () => {
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  // Spring animation for the toggle button container
  const [animationProps, animationApi] = useSpring(() => ({}));

  // Click animation
  const [clickAnimationProps, clickAnimationApi] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }));

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "zh" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);

    // Trigger animations
    animationApi.start({});

    clickAnimationApi.start({
      scale: 1.2,
    });

    // Reset the click animation scale back to 1
    setTimeout(() => {
      clickAnimationApi.start({ scale: 1 });
    }, 150);
  };

  return (
    <animated.div
      style={{
        ...animationProps,
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <animated.div
        style={{
          ...clickAnimationProps,
          display: "inline-block",
        }}
      >
        <Button
          onClick={toggleLanguage}
          style={{
            cursor: "none",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TbLanguage size={24} style={{ marginRight: "8px" }} />
        </Button>
      </animated.div>
    </animated.div>
  );
};

export default TranslationToggle;
