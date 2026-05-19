import { skills } from '../dataTech';
import { projectsData } from '../dataProject';
import { hackathons } from '../dataHackathon';

export const en = {
    nav: {
        links: [
            { id: 0, label: '01', title: 'Me' },
            { id: 1, label: '02', title: 'My Skills' },
            { id: 2, label: '03', title: 'My Projects' },
            { id: 3, label: '04', title: 'Hackathons' },
            { id: 4, label: '05', title: 'Contact' },
        ],
        downloadCV: "Download my CV"
    },
    me: {
        name: "Harena",
        lastName: "Sarobidy",
        role: "Developer Web & Mobile ...",
        passion: {
            title: "Passion",
            text: "Creating dynamic experiences and solving complex problems with robust code architectures."
        },
        vision: {
            title: "Vision",
            text: "Building innovative software solutions to elevate digital experiences for people worldwide."
        },
        copyright: "© Copyright 2026, Harena S."
    },
    skills: {
        title: "My Skills",
        defaultDescription: "Passionate full-stack developer crafting modern web and mobile experiences with cutting-edge technologies and best practices.",
        items: skills.map(skill => ({
            name: skill.name,
            description: skill.descriptionEn
        }))
    },
    projects: {
        title: "My Projects",
        demo: "Demo",
        viewGitHub: "View on GitHub",
        dateLabel: "Date",
        web: projectsData.web.map(project => ({
            id: project.id,
            title: project.titleEn,
            description: project.descriptionEn
        })),
        mobile: projectsData.mobile.map(project => ({
            id: project.id,
            title: project.titleEn,
            description: project.descriptionEn
        }))
    },
    hackathons: {
        title: "Hackathon Innovations",
        readDetails: "Read Details",
        keyAchievements: "Key Achievements",
        items: hackathons.map(h => ({
            title: h.title,
            prize: h.prizeEn,
            description: h.descriptionEn,
            location: h.location
        })),
        achievements: ["Awards & Recognition", "Cross-functional Collaboration", "Rapid Prototyping Skills"]
    },
    contact: {
        title: "Contact",
        subtitle: "Get in touch",
        description: "Have questions or ready to transform your business with AI automation?",
        fields: {
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            submit: "Submit"
        },
        info: {
            email: {
                label: "Email us",
                value: "misandratra.harena3@gmail.com"
            },
            call: {
                label: "Call us",
                value: "(+261) 34 62 144 84"
            },
            location: {
                label: "Our location",
                value: "Mahatony, Antananarivo"
            }
        },
        copyright: "© Copyright 2026, Harena S."
    }
};
