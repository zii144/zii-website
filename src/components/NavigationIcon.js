import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import styles from "../style.navigation.module.css";

const NavigationIcon = ({ IconComponent, path }) => {
  const [customStyle, animate] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 50 },
  }));

  const handleMouseEnter = () => {
    const randomRotate = Math.floor(Math.random() * 20) - 10;
    animate.start({
      transform: "scale(1.3)",
      y: -20,
      rotate: randomRotate,
    });
  };

  const handleMouseLeave = () => {
    animate({
      transform: "scale(1)",
      y: 0,
      rotate: 0,
    });
  };

  return (
    <Link to={path} className={styles.navLink}>
      <animated.div
        style={customStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconComponent />
      </animated.div>
    </Link>
  );
};

export default NavigationIcon;
