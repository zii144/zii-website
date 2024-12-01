import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../style.skill.module.css";
import CrystalCard from "./CrystalCard";
import getLocalizedSkillData from "../data/skillData";

const SkillSet = () => {
  const { i18n } = useTranslation();
  const [skillData, setSkillData] = useState(getLocalizedSkillData());

  useEffect(() => {
    setSkillData(getLocalizedSkillData());
  }, [i18n.language]); // Update data on language change

  return (
    <div className={styles.skillSetPage}>
      <header className={styles.skillSetHeader}>
        <h1>What I bring to the table</h1>
        <p>Hover on a skill to explore more, and click to see it in action!</p>
      </header>
      <div className={styles.skillSetContainer}>
        {skillData.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h2>{category.category}</h2>
            <div className={styles.crystalGrid}>
              {category.skills.map((skill, idx) => (
                <CrystalCard key={idx} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
