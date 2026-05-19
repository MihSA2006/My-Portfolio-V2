import dsa from "../assets/DSA.PNG"
import evenEase from "../assets/EventEase.PNG"
import madagIAscar from "../assets/MadagIAscar.PNG"
import xShoes from "../assets/X-Shoes.png"


import reactLogo from '../assets/reactlogo.png'
import djangoLogo from '../assets/django.png'
import postgreLogo from '../assets/LogoPostgreSql.png'
import githubLogo from '../assets/github.png'
import tailwindLogo from '../assets/tailwind.png'
import sassLogo from '../assets/sass-logo.png'
import angularLogo from '../assets/angular-logo.png'
import mongoDbLogo from '../assets/Mongo-logo.png'
import nestJsLogo from '../assets/nestjs.svg'

const projectsData = {
  web: [
    {
      id: 1,
      titleEn: "DSA Platform",
      titleFr: "Plateforme DSA",
      date: "2025",
      image: dsa,
      tech: [reactLogo, djangoLogo, postgreLogo, githubLogo],
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
      descriptionEn: "An e-commerce platform dedicated to selling shoes online. It allows users to browse models, view product details, and make purchases easily through a simple and intuitive interface.",
      descriptionFr: "Une plateforme e-commerce dédiée à la vente de chaussures en ligne. Elle permet aux utilisateurs de parcourir différents modèles de chaussures, consulter les détails des produits et effectuer leurs achats facilement à travers une interface simple et intuitive."
    },
  ],
  mobile: [
    {
      id: 5,
      titleEn: "Mobile Contest App",
      titleFr: "App de Concours Mobile",
      date: "2025",
      descriptionEn: "Native mobile application for real-time coding competitions.",
      descriptionFr: "Application mobile native pour des compétitions de codage en temps réel.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      tech: [reactLogo, djangoLogo],
    },
  ],
};

export { projectsData };