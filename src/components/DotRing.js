import React, { useContext } from "react";
import { animated, useSpring } from "@react-spring/web";
import useMousePosition from "./hooks/useMousePosition";
import { MouseContext } from "../context/mouse-context";

const DotRing = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  // Smooth animation for the ring
  const animatedProps = useSpring({
    x,
    y,
    config: { mass: 2, tension: 200, friction: 20 }, // Adjust for smoother delay
  });

  return (
    <>
      <animated.div
        style={{
          left: animatedProps.x,
          top: animatedProps.y,
          transform: "translate(-50%, -50%)",
        }}
        className={"ring " + cursorType}
      ></animated.div>
      <animated.div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: "translate(-50%, -50%)",
        }}
        className={"dot " + cursorType}
      ></animated.div>
    </>
  );
};

export default DotRing;
