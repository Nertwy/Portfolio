import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            navBar_Home: "Home",
            navbar_About: "About",
            navbar_Skill: "Skill",
            navbar_Project: "Project",
            navbar_Contact: "Contact",
            photoPage_Hi: "Hi Everyone, I am",
            photoPage_Name: "Denis Bosiuk",
            photoPage_text:
              "Creative frontend developer inspired by React. Crafting elegant user interfaces with attention to detail.",
            photoPage_CV: "Download CV",
            photoPage_Contact: "Contact Me!",
            aboutPage_Header: "About",
            aboutPage_Header2: "About Me?",
            aboutPage_Text: `I am a front-end developer with a passion for crafting immersive
            digital experiences. My expertise lies in using React, a powerful
            front-end library, to build dynamic and user-friendly web
            applications. Although my journey in this field has just begun, I am
            determined to continuously learn and evolve. I possess a strong
            foundation in HTML, CSS, and JavaScript, which empowers me to create
            visually stunning and interactive interfaces. Additionally, I have
            some knowledge of backend technologies like Node.js and Express,
            allowing me to understand the entire web development process. Driven
            by curiosity and a desire for excellence, I am always on the lookout
            for new challenges to hone my skills and keep up with the latest
            industry trends. I am enthusiastic about contributing to meaningful
            projects and collaborating with talented teams to deliver
            exceptional user experiences.`,
            skillsPage_Header: "Skills",
            skillsPage_Header2: "What I am capable of?",
            projectsPage_h1: "Projects",
            projectsPage_h2: "What have I made?",
            projDesc: [
              "Recipes application with Basic usage",
              "Simple HR data management application",
              "Portfolio website that is always up-to-date.",
            ],
            projTitle: [
              "Food Recipes Application",
              "Web Application for HR",
              "Portfolio Website Design",
            ],
            projContacts: "Contacts",
            projGetInTouch: "Get in touch",
          },
        },
      },
      uk: {
        translation: {
          description: {
            navBar_Home: "Додому",
            navbar_About: "Про мене",
            navbar_Skill: "Навички",
            navbar_Project: "Проекти",
            navbar_Contact: "Контакти",
            photoPage_Hi: "Привіт усім, я - ",
            photoPage_Name: "Денис Босюк",
            photoPage_text:
              "Творчий фронтенд розробник, що надихається React. Створюю елегантні інтерфейси користувача з увагою до деталей.",
            photoPage_CV: "Завантажити CV",
            photoPage_Contact: "Зв'язатися зі мною!",
            aboutPage_Header: "Опис",
            aboutPage_Header2: "Про Мене?",
            aboutPage_Text: `Я - розробник front-end, що прагне створювати захоплюючі цифрові
            враження. Моє вміння ґрунтується на використанні React - потужної
            бібліотеки для front-end, для створення динамічних та зручних у
            використанні веб-додатків. Навіть якщо моя подорож у цій галузі тільки
            починається, я рішуче прагну неперервно навчатись і розвиватись. Володію
            міцною базою знань HTML, CSS та JavaScript, що дозволяє мені створювати
            візуально захоплюючі та інтерактивні інтерфейси. Крім того, маю певний
            досвід роботи з бекенд технологіями, такими як Node.js та Express, що
            дозволяє мені розуміти весь процес розробки веб-додатків. Мою
            допитливість і прагнення до відмінності підтримують нові виклики, що
            дозволяють мені вдосконалювати свої навички і залишатись у курсі
            останніх тенденцій у сфері. Я відчуваю ентузіазм стосовно участі в
            значущих проектах і співпраці з талановитими командами для забезпечення
            надзвичайних користувацьких вражень.`,
            skillsPage_Header: "Навички",
            skillsPage_Header2: "На що я спроможний?",
            projectsPage_h1: "Проекти",
            projectsPage_h2: "Що я створив?",
            projDesc: [
              "Додаток для рецептів з базовими функціями",
              "Простий додаток для управління даними HR",
              "Дизайн веб-сайту-портфоліо, який завжди оновлюється.",
            ],
            projTitle: [
              "Додаток рецептів з їжею",
              "Веб-додаток для HR персоналу",
              "Дизайн веб-сайту-портфоліо",
            ],
            projContacts: "Контакти",
            projGetInTouch: "Зв'язок зі мною",
          },
        },
      },
      pl: {
        translation: {
          description: {
            part1: "",
          },
        },
      },
    },
  });

export default i18n;
