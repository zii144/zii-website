import React from "react";
import styles from "../style.skill.module.css";

const SkillCategory = ({ category }) => {
  return (
    <div className={styles.SkillCategory}>
      <h2>{category.category}</h2>
      <ul>
        {category.skills.map((skill, index) => (
          <li key={index} className={styles.item}>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
