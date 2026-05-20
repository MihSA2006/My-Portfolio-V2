import { skills } from '../dataTech';
import { projectsData } from '../dataProject';
import { hackathons } from '../dataHackathon';

export const fr = {
    nav: {
        links: [
            { id: 0, label: '01', title: 'Moi' },
            { id: 1, label: '02', title: 'Compétences' },
            { id: 2, label: '03', title: 'Projets' },
            { id: 3, label: '04', title: 'Hackathons' },
            { id: 4, label: '05', title: 'Contact' },
        ],
        downloadCV: "Télécharger mon CV"
    },
    me: {
        name: "Harena",
        lastName: "Sarobidy",
        role: "Développeur Web & Mobile ...",
        passion: {
            title: "Passion",
            text: "Création d'expériences dynamiques et résolution de problèmes complexes avec des architectures de code robustes."
        },
        vision: {
            title: "Vision",
            text: "Construire des solutions logicielles innovantes pour améliorer les expériences numériques des gens dans le monde entier."
        },
        copyright: "© Copyright 2026, Harena S."
    },
    skills: {
        title: "Mes Compétences",
        defaultDescription: "Développeur full-stack passionné créant des expériences web et mobiles modernes avec des technologies de pointe et les meilleures pratiques.",
        items: skills.map(skill => ({
            name: skill.name,
            description: skill.descriptionFr
        }))
    },
    projects: {
        title: "Mes Projets",
        demo: "Démo",
        viewGitHub: "Voir sur GitHub",
        dateLabel: "Date",
        web: projectsData.web.map(project => ({
            id: project.id,
            title: project.titleFr,
            description: project.descriptionFr
        })),
        mobile: projectsData.mobile.map(project => ({
            id: project.id,
            title: project.titleFr,
            description: project.descriptionFr
        }))
    },
    hackathons: {
        title: "Innovations Hackathon",
        readDetails: "Voir Détails",
        keyAchievements: "Réalisations Clés",
        items: hackathons.map(h => ({
            title: h.title,
            prize: h.prizeFr,
            description: h.descriptionFr,
            location: h.location
        })),
        achievements: ["Prix & Reconnaissance", "Collaboration Transversale", "Prototypage Rapide"]
    },
    contact: {
        title: "Contact",
        subtitle: "Contactez-moi",
        description: "Vous avez des questions ou vous êtes prêt à transformer votre entreprise avec l'IA ?",
        fields: {
            name: "Votre Nom",
            email: "Votre Email",
            message: "Votre Message",
            submit: "Envoyer"
        },
        messages: {
            success: "Merci ! Votre message a été envoyé.",
            error: "Une erreur s'est produite. Veuillez réessayer plus tard."
        },
        info: {
            email: {
                label: "Email",
                value: "misandratra.harena3@gmail.com"
            },
            call: {
                label: "Appelez-moi",
                value: "(+261) 34 62 144 84"
            },
            location: {
                label: "Emplacement",
                value: "Mahatony, Antananarivo"
            }
        },
        copyright: "© Copyright 2026, Harena S."
    }
};
