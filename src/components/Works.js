import React from "react";
import styles from "../style.work.module.css"; // Import your CSS module for styling

const Works = () => {
  return (
    <div className={styles.workContainer}>
      <h1 className={styles.title}>My Work</h1>
      <p className={styles.description}>
        Welcome to my work page. Here you can find some of the projects I have
        worked on.
      </p>
      <div className={styles.projects}>
        <div className={styles.project}>
          <h2 className={styles.projectTitle}>Project 1</h2>
          <p className={styles.projectDescription}>Description of Project 1.</p>
        </div>
        <div className={styles.project}>
          <h2 className={styles.projectTitle}>Project 2</h2>
          <p className={styles.projectDescription}>Description of Project 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
