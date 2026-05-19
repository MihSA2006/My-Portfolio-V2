// src/data/dataHackathon.js
import { 
    TrophyIcon, 
    AcademicCapIcon, 
    RocketLaunchIcon, 
    CommandLineIcon,
    GlobeAltIcon,
    MapPinIcon,
    CalendarIcon
} from '@heroicons/react/24/outline';

export const hackathons = [
    {
        id: 1,
        title: "Algo INSI Tournament",
        organization: "DSA (Data Structure and Algorithm)",
        role: "Algorithmic Contest",
        prizeEn: "1st Place",
        prizeFr: "1ère Place",
        descriptionEn: "Algorithm contest organized by DSA at INSI.",
        descriptionFr: "Concours d'algorithmique organisé par DSA (Data Structure and Algorithm) à l'INSI.",
        year: "2026",
        location: "INSI, Madagascar",
        icon: TrophyIcon,
        achievements: ["Data Structures", "Speed Coding"]

    },
    {
        id: 2,
        title: "Hackathon DevFest Antsirabe",
        organization: "DevFest Antsirabe",
        role: "Web Development",
        prizeEn: "1st Place",
        prizeFr: "1ère Place",
        descriptionEn: "Web application using AI to suggest business ideas and track their evolution.",
        descriptionFr: "Application web utilisant l'IA pour suggérer des idées de business et suivre leur évolution.",
        year: "2025",
        location: "Antsirabe, Madagascar",
        icon: RocketLaunchIcon,
        achievements: ["AI Integration", "Fast Prototyping"]
    },
    {
        id: 3,
        title: "MAT (Malagasy Algo Tournament)",
        organization: "MAT Organization",
        role: "Competitive Programming",
        prizeEn: "Participation",
        prizeFr: "Participation",
        descriptionEn: "Solving complex algorithms in Python under time constraints.",
        descriptionFr: "Résolution d'algorithmes complexes en Python sous des contraintes de temps.",
        year: "2025",
        location: "Madagascar",
        icon: CommandLineIcon,
        achievements: ["Python", "Problem Solving"]
    },
    {
        id: 4,
        title: "Redshalk Hackathon",
        organization: "Redshalk",
        role: "Web Development",
        prizeEn: "Participation",
        prizeFr: "Participation",
        descriptionEn: "Web application for tracking pig breeds and managing agricultural farms.",
        descriptionFr: "Application de suivi des races de porcs et de gestion des exploitations agricoles.",
        year: "2025",
        location: "Antananarivo, Madagascar",
        icon: AcademicCapIcon,
        achievements: ["Agricultural Tech", "Management Systems"]
    }
];
