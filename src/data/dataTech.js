// dataTech.js
import reactLogo from '../assets/react.png'
import reactNativeLogo from '../assets/react-native.png'
import djangoLogo from '../assets/django.png'
import postgreLogo from '../assets/LogoPostgreSql.png'
import githubLogo from '../assets/githubLogo.png'
import dockerLogo from '../assets/docker-logo.png'
import tailwindLogo from '../assets/tailwind.png'
import sassLogo from '../assets/sass-logo.png'
import expressLogo from '../assets/express-js.png'
import dotnetLogo from '../assets/dotnet.png'
import mysqlLogo from '../assets/mysql.png'
import nextJsLogo from '../assets/nextjs.png'

const skills = [
  { 
    name: "React", 
    img: reactLogo, 
    position: "top-[5%] left-[30%] -translate-x-1/2",
    description: "A JavaScript library for building user interfaces with component-based architecture and virtual DOM."
  },
  { 
    name: "React Native", 
    img: reactNativeLogo, 
    position: "top-[20%] left-[15%]",
    description: "Framework for building native mobile apps using React and JavaScript for iOS and Android platforms."
  },
  { 
    name: "Tailwind", 
    img: tailwindLogo, 
    position: "top-[35%] left-[30%] -translate-x-1/2",
    description: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML."
  },
  { 
    name: "Sass", 
    img: sassLogo, 
    position: "top-[50%] left-[15%]",
    description: "CSS preprocessor that extends CSS with features like variables, nesting, and mixins for cleaner stylesheets."
  },
  { 
    name: "Next.js", 
    img: nextJsLogo, 
    position: "top-[65%] left-[30%] -translate-x-1/2",
    description: "React framework for production with server-side rendering, static site generation, and API routes."
  },
  { 
    name: "GitHub", 
    img: githubLogo, 
    position: "top-[75%] left-[15%]",
    description: "Web-based platform for version control and collaboration using Git for software development projects."
  },
  { 
    name: "Django", 
    img: djangoLogo, 
    position: "top-[5%] right-[22%] -translate-x-1/2",
    description: "High-level Python web framework that encourages rapid development and clean, pragmatic design."
  },
  { 
    name: "Express", 
    img: expressLogo, 
    position: "top-[20%] right-[10%] -translate-x-1/2",
    description: "Fast, unopinionated, minimalist web framework for Node.js to build web applications and APIs."
  },
  { 
    name: ".Net", 
    img: dotnetLogo, 
    position: "top-[35%] right-[22%] -translate-x-1/2",
    description: "Microsoft's cross-platform framework for building web, mobile, desktop, and cloud applications with C#."
  },
  { 
    name: "MySql", 
    img: mysqlLogo, 
    position: "top-[50%] right-[10%] -translate-x-1/2",
    description: "Open-source relational database management system based on SQL for structured data storage."
  },
  { 
    name: "PostgreSql", 
    img: postgreLogo, 
    position: "top-[65%] right-[22%] -translate-x-1/2",
    description: "Advanced open-source relational database with strong reputation for reliability and data integrity."
  },
  { 
    name: "Docker", 
    img: dockerLogo, 
    position: "top-[75%] right-[10%] -translate-x-1/2",
    description: "Platform for developing, shipping, and running applications in isolated containers for consistency."
  },
];

export { skills };