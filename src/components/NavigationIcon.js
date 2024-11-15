import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import styles from "../style.navigation.module.css";

const NavigationIcon = ({ IconComponent, path }) => {
  const [customStyle, animate] = useSpring(() => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 50 },
  }));

  const handleMouseEnter = () => {
    animate.start({ transform: "scale(1.1)" });
  };

  const handleMouseLeave = () => {
    animate({ transform: "scale(1)" });
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
