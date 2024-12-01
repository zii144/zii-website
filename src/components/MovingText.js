import React from "react";
import { useSpring, animated } from "@react-spring/web";

const MovingText = () => {
  const animationStyle = useSpring({
    loop: true,
    from: { transform: "translateX(0px) rotate)(0deg)" },
    to: { transform: "translateX(50px) rotate(45deg" },
    config: { duration: 2000 },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <animated.div
        style={{
          ...animationStyle,
          fontSize: "2rem",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Moving Text
      </animated.div>
    </div>
  );
};

export default MovingText;
