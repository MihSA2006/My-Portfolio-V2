// dataTech.js
import reactLogo from '../assets/reactlogo.png'
import reactNativeLogo from '../assets/react-native.png'
import djangoLogo from '../assets/django.png'
import postgreLogo from '../assets/LogoPostgreSql.png'
import githubLogo from '../assets/github.png'
import dockerLogo from '../assets/docker-logo.png'
import tailwindLogo from '../assets/tailwind.png'
import sassLogo from '../assets/sass-logo.png'
import angularLogo from '../assets/angular-logo.png'
import springbootLogo from '../assets/spring-boot.png'
import mongoDbLogo from '../assets/Mongo-logo.png'
import nestJsLogo from '../assets/nestjs.svg'

const skills = [
  {
    name: "React",
    img: reactLogo,
    position: "top-[5%] left-[30%] -translate-x-1/2",
    description: "A JavaScript library for building user interfaces with component-based architecture and virtual DOM.",
    progress: 90,
    color: "#61DAFB"
  },
  {
    name: "React Native",
    img: reactNativeLogo,
    position: "top-[20%] left-[15%]",
    description: "Framework for building native mobile apps using React and JavaScript for iOS and Android platforms.",
    progress: 85,
    color: "#61DAFB"
  },
  {
    name: "Tailwind",
    img: tailwindLogo,
    position: "top-[35%] left-[30%] -translate-x-1/2",
    description: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
    progress: 95,
    color: "#38B2AC"
  },
  {
    name: "Sass",
    img: sassLogo,
    position: "top-[50%] left-[15%]",
    description: "CSS preprocessor that extends CSS with features like variables, nesting, and mixins for cleaner stylesheets.",
    progress: 80,
    color: "#CC6699"
  },
  {
    name: "Nest.js",
    img: nestJsLogo,
    position: "top-[65%] left-[30%] -translate-x-1/2",
    description: "Robust Node.js framework for building efficient, reliable and scalable server-side applications.",
    progress: 75,
    color: "#E0234E"
  },
  {
    name: "GitHub",
    img: githubLogo,
    position: "top-[75%] left-[15%]",
    description: "Web-based platform for version control and collaboration using Git for software development projects.",
    progress: 90,
    color: "#181717"
  },
  {
    name: "Django",
    img: djangoLogo,
    position: "top-[5%] right-[22%] -translate-x-1/2",
    description: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
    progress: 80,
    color: "#092E20"
  },
  {
    name: "Angular",
    img: angularLogo,
    position: "top-[20%] right-[10%] -translate-x-1/2",
    description: "Fast, unopinionated, minimalist web framework for Node.js to build web applications and APIs.",
    progress: 85,
    color: "#4a4a4a"
  },
  {
    name: "Java Spring Boot",
    img: springbootLogo,
    position: "top-[35%] right-[22%] -translate-x-1/2",
    description: "Comprehensive framework for building production-grade Spring-based Applications.",
    progress: 70,
    color: "#6DB33F"
  },
  {
    name: "MongoDB",
    img: mongoDbLogo,
    position: "top-[50%] right-[10%] -translate-x-1/2",
    description: "Open-source relational database management system based on SQL for structured data storage.",
    progress: 80,
    color: "#4479A1"
  },
  {
    name: "PostgreSql",
    img: postgreLogo,
    position: "top-[65%] right-[22%] -translate-x-1/2",
    description: "Advanced open-source relational database with strong reputation for reliability and data integrity.",
    progress: 75,
    color: "#336791"
  },
  {
    name: "Docker",
    img: dockerLogo,
    position: "top-[75%] right-[10%] -translate-x-1/2",
    description: "Platform for developing, shipping, and running applications in isolated containers for consistency.",
    progress: 65,
    color: "#2496ED"
  },
];

export { skills };