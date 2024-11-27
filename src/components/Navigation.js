import {
  TbHome,
  TbBriefcase2,
  TbBriefcase2Filled,
  TbConfetti,
  TbConfettiOff,
} from "react-icons/tb";

import NavigationIcon from "./NavigationIcon";

import styles from "../style.navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavigationIcon IconComponent={TbHome} path="/" />
        </li>
        <li className={styles.navItem}>
          <NavigationIcon IconComponent={TbBriefcase2} path="/skills" />
        </li>
        <li className={styles.navItem}>
          <NavigationIcon IconComponent={TbConfetti} path="/contactme" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
