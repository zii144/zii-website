import i18next from "i18next";

const getLocalizedSkillData = () => [
  {
    category: i18next.t("skills.categories.programmingLanguages"),
    skills: [
      {
        name: i18next.t("skills.skillsList.javascript.name"),
        description: i18next.t("skills.skillsList.javascript.description"),
      },
      {
        name: i18next.t("skills.skillsList.csharp.name"),
        description: i18next.t("skills.skillsList.csharp.description"),
      },
      {
        name: i18next.t("skills.skillsList.swift.name"),
        description: i18next.t("skills.skillsList.swift.description"),
      },
    ],
  },
  {
    category: i18next.t("skills.categories.frontendDevelopment"),
    skills: [
      {
        name: i18next.t("skills.skillsList.react.name"),
        description: i18next.t("skills.skillsList.react.description"),
      },
      {
        name: i18next.t("skills.skillsList.vue.name"),
        description: i18next.t("skills.skillsList.vue.description"),
      },
    ],
  },
  {
    category: i18next.t("skills.categories.frameworksAndLibraries"),
    skills: [
      {
        name: i18next.t("skills.skillsList.unity.name"),
        description: i18next.t("skills.skillsList.unity.description"),
      },
      {
        name: i18next.t("skills.skillsList.swiftUI.name"),
        description: i18next.t("skills.skillsList.swiftUI.description"),
      },
      {
        name: i18next.t("skills.skillsList.firebase.name"),
        description: i18next.t("skills.skillsList.firebase.description"),
      },
    ],
  },
  {
    category: i18next.t("skills.categories.tools"),
    skills: [
      {
        name: i18next.t("skills.skillsList.github.name"),
        description: i18next.t("skills.skillsList.github.description"),
      },
      {
        name: i18next.t("skills.skillsList.vsCode.name"),
        description: i18next.t("skills.skillsList.vsCode.description"),
      },
      {
        name: i18next.t("skills.skillsList.xcode.name"),
        description: i18next.t("skills.skillsList.xcode.description"),
      },
    ],
  },
  {
    category: i18next.t("skills.categories.design"),
    skills: [
      {
        name: i18next.t("skills.skillsList.figma.name"),
        description: i18next.t("skills.skillsList.figma.description"),
      },
      {
        name: i18next.t("skills.skillsList.adobeIllustrator.name"),
        description: i18next.t(
          "skills.skillsList.adobeIllustrator.description"
        ),
      },
      {
        name: i18next.t("skills.skillsList.adobePhotoshop.name"),
        description: i18next.t("skills.skillsList.adobePhotoshop.description"),
      },
    ],
  },
  {
    category: i18next.t("skills.categories.others"),
    skills: [
      {
        name: i18next.t("skills.skillsList.netlify.name"),
        description: i18next.t("skills.skillsList.netlify.description"),
      },
      {
        name: i18next.t("skills.skillsList.heroku.name"),
        description: i18next.t("skills.skillsList.heroku.description"),
      },
      {
        name: i18next.t("skills.skillsList.wordpress.name"),
        description: i18next.t("skills.skillsList.wordpress.description"),
      },
    ],
  },
];

export default getLocalizedSkillData;
