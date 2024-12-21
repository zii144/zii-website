import { TbHome, TbBriefcase2, TbConfetti } from "react-icons/tb";
import NavigationIcon from "./NavigationIcon";
import styles from "../style.navigation.module.css";
import { MouseContext } from "../context/mouse-context";
import { useContext } from "react";

function Navigation() {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li
          className={styles.navItem}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavigationIcon IconComponent={TbHome} path="/" />
        </li>
        <li
          className={styles.navItem}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavigationIcon IconComponent={TbBriefcase2} path="/skills" />
        </li>
        <li
          className={styles.navItem}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <NavigationIcon IconComponent={TbConfetti} path="/contactme" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
