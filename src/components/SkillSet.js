import React from "react";

import styles from "../style.skill.module.css";
import CrystalCard from "./CrystalCard";

const SkillSet = () => {
  const skillData = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          icon: "devicon-javascript-plain",
          description:
            "Experienced in building interactive web applications and leveraging ES6+ features for clean, maintainable code.",
        },
        {
          name: "C#",
          icon: "devicon-csharp-plain",
          description:
            "Strong expertise in Unity game development, focusing on optimizing scripts for 3D interactive scenes.",
        },
        {
          name: "Swift",
          icon: "devicon-swift-plain",
          description:
            "Proficient in developing iOS apps with Swift, utilizing SwiftUI for modern UI design and seamless animations.",
        },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: "devicon-react-original",
          description:
            "Skilled in building responsive, dynamic web apps using React, React Router, and Context API for state management.",
        },
        {
          name: "Vue",
          icon: "devicon-vuejs-plain",
          description:
            "Knowledgeable in creating lightweight, fast-loading single-page applications with Vue and Vuex for state handling.",
        },
      ],
    },
    {
      category: "Frameworks and Libraries",
      skills: [
        {
          name: "Unity",
          icon: "devicon-unity-original",
          description:
            "Focused on game mechanics, interactive 3D scenes, and animation using Unity's Timeline and DOTween.",
        },
        {
          name: "SwiftUI",
          icon: "devicon-swift-plain",
          description:
            "Skilled at building custom animations and user-friendly iOS interfaces with SwiftUI, adhering to Apple HIG.",
        },
        {
          name: "Firebase",
          icon: "devicon-firebase-plain",
          description:
            "Utilized for real-time database management and user authentication in mobile and web applications.",
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        {
          name: "GitHub",
          icon: "devicon-github-plain",
          description:
            "Extensively used for version control, collaborating on projects, and maintaining a clean, organized codebase.",
        },
        {
          name: "VS Code",
          icon: "devicon-visualstudio-plain",
          description:
            "Preferred IDE for JavaScript and React development, with custom extensions for improved productivity.",
        },
        {
          name: "Xcode",
          icon: "devicon-xcode-plain",
          description:
            "Primary tool for Swift and SwiftUI development, leveraging debugging tools and performance profiling.",
        },
      ],
    },
    {
      category: "Design",
      skills: [
        {
          name: "Figma",
          icon: "devicon-figma-plain",
          description:
            "Utilized for designing intuitive user interfaces and prototyping interactive components for apps and websites.",
        },
        {
          name: "Adobe Illustrator",
          icon: "devicon-illustrator-plain",
          description:
            "Expertise in creating vector art, wireframes, and branding assets for digital and print media.",
        },
        {
          name: "Adobe Photoshop",
          icon: "devicon-photoshop-plain",
          description:
            "Used for image editing, UI elements, and creating mockups for web and game interfaces.",
        },
      ],
    },
    {
      category: "Others",
      skills: [
        {
          name: "Netlify",
          icon: "devicon-netlify-plain",
          description:
            "Deploying and hosting modern web applications with continuous integration pipelines.",
        },
        {
          name: "Heroku",
          icon: "devicon-heroku-original",
          description:
            "Experienced in deploying full-stack applications with scalable backend solutions.",
        },
        {
          name: "WordPress",
          icon: "devicon-wordpress-plain",
          description:
            "Customized WordPress websites for elegant, minimal UX design and media integration.",
        },
      ],
    },
  ];

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
                <CrystalCard key={idx} skill={skill} videoId={skill.videoId} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
