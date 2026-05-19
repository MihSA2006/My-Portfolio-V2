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
import mysqlLogo from '../assets/mysql.png'
import expressLogo from '../assets/express-js.png'
import flutterLogo from '../assets/flutter.png'
import dotnetLogo from '../assets/dotnet.png'

// Horizontal Tier Variables
const LEFT_OUTER = "left-[8%]";
const LEFT_INNER = "left-[20%] -translate-x-1/2";
const RIGHT_INNER = "right-[20%] -translate-x-1/2";
const RIGHT_OUTER = "right-[8%] -translate-x-1/2";

// Vertical Row Variables
const ROW1 = "top-[10%]";
const ROW2 = "top-[32%]";
const ROW3 = "top-[53%]";
const ROW4 = "top-[74%]";

const skills = [
  // --- FRONTEND WEB ---
  {
    name: "React",
    img: reactLogo,
    category: "frontend",
    position: `${ROW1} ${LEFT_INNER}`,
    descriptionEn: "A JavaScript library for building user interfaces with component-based architecture and virtual DOM.",
    descriptionFr: "Une bibliothèque JavaScript pour créer des interfaces utilisateur avec une architecture basée sur des composants et un DOM virtuel.",
    progress: 90,
    color: "#61DAFB"
  },
  {
    name: "Angular",
    img: angularLogo,
    category: "frontend",
    position: `${ROW1} ${LEFT_OUTER}`,
    descriptionEn: "Fast, unopinionated, minimalist web framework for Node.js to build web applications and APIs.",
    descriptionFr: "Cadre Web rapide et minimaliste pour Node.js afin de créer des applications Web et des API.",
    progress: 85,
    color: "#4a4a4a"
  },
  {
    name: "Tailwind",
    img: tailwindLogo,
    category: "frontend",
    position: `${ROW2} ${LEFT_INNER}`,
    descriptionEn: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
    descriptionFr: "Cadre CSS axé sur les utilitaires pour créer rapidement des designs personnalisés sans quitter votre HTML.",
    progress: 95,
    color: "#38B2AC"
  },
  {
    name: "Sass",
    img: sassLogo,
    category: "frontend",
    position: `${ROW2} ${LEFT_OUTER}`,
    descriptionEn: "CSS preprocessor that extends CSS with features like variables, nesting, and mixins for cleaner stylesheets.",
    descriptionFr: "Préprocesseur CSS qui étend le CSS avec des fonctionnalités telles que les variables, l'imbrication et les mixins pour des feuilles de style plus propres.",
    progress: 80,
    color: "#CC6699"
  },
  
  // --- MOBILE ---
  {
    name: "React Native",
    img: reactNativeLogo,
    category: "mobile",
    position: `${ROW3} ${LEFT_INNER}`,
    descriptionEn: "Framework for building native mobile apps using React and JavaScript for iOS and Android platforms.",
    descriptionFr: "Cadre pour créer des applications mobiles natives utilisant React et JavaScript pour les plateformes iOS et Android.",
    progress: 85,
    color: "#61DAFB"
  },
  {
    name: "Flutter",
    img: flutterLogo,
    category: "mobile",
    position: `${ROW3} ${LEFT_OUTER}`,
    descriptionEn: "UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    descriptionFr: "Boîte à outils UI pour créer des applications compilées nativement pour mobile, web et bureau à partir d'une seule base de code.",
    progress: 80,
    color: "#02569B"
  },

  // --- BACKEND ---
  {
    name: "Django",
    img: djangoLogo,
    category: "backend",
    position: `${ROW4} ${LEFT_INNER}`,
    descriptionEn: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
    descriptionFr: "Cadre Web Python de haut niveau qui encourage un développement rapide et une conception propre et pragmatique.",
    progress: 80,
    color: "#092E20"
  },
  {
    name: "Nest.js",
    img: nestJsLogo,
    category: "backend",
    position: `${ROW4} ${LEFT_OUTER}`,
    descriptionEn: "Robust Node.js framework for building efficient, reliable and scalable server-side applications.",
    descriptionFr: "Cadre Node.js robuste pour créer des applications côté serveur efficaces, fiables et évolutives.",
    progress: 75,
    color: "#E0234E"
  },
  {
    name: "Java Spring Boot",
    img: springbootLogo,
    category: "backend",
    position: `${ROW1} ${RIGHT_INNER}`,
    descriptionEn: "Comprehensive framework for building production-grade Spring-based Applications.",
    descriptionFr: "Cadre complet pour créer des applications Spring de qualité logicielle.",
    progress: 70,
    color: "#6DB33F"
  },
  {
    name: "Express",
    img: expressLogo,
    category: "backend",
    position: `${ROW1} ${RIGHT_OUTER}`,
    descriptionEn: "Fast, unopinionated, minimalist web framework for Node.js.",
    descriptionFr: "Cadre Web rapide et minimaliste pour Node.js.",
    progress: 85,
    color: "#000000"
  },
  {
    name: "Dotnet",
    img: dotnetLogo,
    category: "backend",
    position: `${ROW2} ${RIGHT_INNER}`,
    descriptionEn: "Free, cross-platform, open-source developer platform for building many different types of applications.",
    descriptionFr: "Plateforme de développement gratuite, multiplateforme et open source pour créer de nombreux types d'applications.",
    progress: 70,
    color: "#512BD4"
  },

  // --- DATABASE ---
  {
    name: "MongoDB",
    img: mongoDbLogo,
    category: "database",
    position: `${ROW2} ${RIGHT_OUTER}`,
    descriptionEn: "Open-source NoSQL document database known for scalability and flexibility.",
    descriptionFr: "Base de données NoSQL orientée documents, réputée pour sa scalabilité et sa flexibilité.",
    progress: 80,
    color: "#4479A1"
  },
  {
    name: "PostgreSql",
    img: postgreLogo,
    category: "database",
    position: `${ROW3} ${RIGHT_INNER}`,
    descriptionEn: "Advanced open-source relational database with strong reputation for reliability and data integrity.",
    descriptionFr: "Base de données relationnelle open source avancée avec une solide réputation de fiabilité et d'intégrité des données.",
    progress: 75,
    color: "#336791"
  },
  {
    name: "MySql",
    img: mysqlLogo,
    category: "database",
    position: `${ROW3} ${RIGHT_OUTER}`,
    descriptionEn: "Open-source relational database management system.",
    descriptionFr: "Système de gestion de base de données relationnelle open-source.",
    progress: 80,
    color: "#4479A1"
  },

  // --- OUTILS ---
  {
    name: "GitHub",
    img: githubLogo,
    category: "tools",
    position: `${ROW4} ${RIGHT_INNER}`,
    descriptionEn: "Web-based platform for version control and collaboration using Git for software development projects.",
    descriptionFr: "Plateforme Web pour le contrôle de version et la collaboration à l'aide de Git pour les projets de développement logiciel.",
    progress: 90,
    color: "#181717"
  },
  {
    name: "Docker",
    img: dockerLogo,
    category: "tools",
    position: `${ROW4} ${RIGHT_OUTER}`,
    descriptionEn: "Platform for developing, shipping, and running applications in isolated containers for consistency.",
    descriptionFr: "Plateforme pour développer, expédier et exécuter des applications dans des conteneurs isolés pour plus de cohérence.",
    progress: 65,
    color: "#2496ED"
  }
];

export { skills };