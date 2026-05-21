import dsa from "../assets/DSA.PNG"
import evenEase from "../assets/EventEase.PNG"
import madagIAscar from "../assets/MadagIAscar.PNG"
import xShoes from "../assets/X-Shoes.png"
import pointagePro from "../assets/pointagePro.png"


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

const projectsData = {
  web: [
    {
      id: 1,
      titleEn: "DSA Platform",
      titleFr: "Plateforme DSA",
      date: "2025",
      image: dsa,
      tech: [reactLogo, djangoLogo, postgreLogo, githubLogo],
      url: "https://youtu.be/toxuUX7tZj4",
      descriptionEn: "An algorithmic contest platform allowing users to solve programming problems in an interactive environment. It features an integrated code editor with support for Python, JavaScript, and C, along with an automatic submission and validation system.",
      descriptionFr: "Une plateforme de concours en algorithmique permettant aux utilisateurs de résoudre des problèmes de programmation dans un environnement interactif. Elle dispose d’un éditeur de code intégré avec support de Python, JavaScript et C, ainsi qu’un système de soumission et de validation automatique des solutions."
    },
    {
      id: 2,
      titleEn: "EventEase",
      titleFr: "EventEase",
      date: "2025",
      image: evenEase,
      tech: [angularLogo, nestJsLogo, mongoDbLogo, tailwindLogo, sassLogo, githubLogo],
      url: "https://youtu.be/6m-XlM2VC3E",
      descriptionEn: "A real-time web platform for booking celebration halls and studios. it integrates an interactive calendar to instantly check availability. The platform also includes an admin dashboard to manage bookings and venues centrally.",
      descriptionFr: "Une plateforme web de réservation de salles de célébration et de studios en temps réel. Elle intègre un calendrier interactif permettant de vérifier instantanément la disponibilité des salles selon les dates et les horaires sélectionnés. La plateforme dispose également d’un tableau de bord administrateur pour gérer les réservations, les salles et l’ensemble du système."
    },
    {
      id: 3,
      titleEn: "MadagIAscar",
      titleFr: "MadagIAscar",
      date: "2024",
      image: madagIAscar,
      tech: [reactLogo, nestJsLogo, postgreLogo, tailwindLogo],
      url: "https://youtu.be/fcESoLlF6x0",
      descriptionEn: "An AI-powered web application that helps users generate innovative business ideas. The platform allows tracking project progress through a task management system with drag-and-drop functionality.",
      descriptionFr: "Une application web basée sur l’intelligence artificielle qui aide les utilisateurs à générer des idées d’entreprise innovantes et adaptées à leurs besoins. Elle permet de suivre l’évolution des projets grâce à un système de gestion des tâches avec fonctionnalité de drag-and-drop."
    },
    {
      id: 4,
      titleEn: "X-Shoes",
      titleFr: "X-Shoes",
      date: "2024",
      image: xShoes,
      tech: [reactLogo, djangoLogo, tailwindLogo, githubLogo],
      url: "https://youtu.be/URMSgjtZIFg",
      descriptionEn: "An e-commerce platform dedicated to selling shoes online. It allows users to browse models, view product details, and make purchases easily through a simple and intuitive interface.",
      descriptionFr: "Une plateforme e-commerce dédiée à la vente de chaussures en ligne. Elle permet aux utilisateurs de parcourir différents modèles de chaussures, consulter les détails des produits et effectuer leurs achats facilement à travers une interface simple et intuitive."
    },
  ],
  mobile: [
    {
      id: 5,
      titleEn: "PointagePro",
      titleFr: "PointagePro",
      date: "2026",
      descriptionEn: "PointagePro is a mobile attendance management application that allows employees to clock in and out using QR codes, with real-time tracking of absences, lateness, and working hours through a secure admin dashboard.",
      descriptionFr: "PointagePro est une application mobile de gestion de présence permettant aux employés de pointer leurs heures d’entrée et de sortie via QR Code, avec un suivi en temps réel des absences, retards et horaires grâce à un dashboard administrateur sécurisé.",
      image: pointagePro,
      tech: [flutterLogo, djangoLogo, postgreLogo, githubLogo],
      url: "https://youtu.be/3n3vzX15KsI",
    },
  ],
};

export { projectsData };