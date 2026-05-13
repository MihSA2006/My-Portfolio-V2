import dsa from "../assets/DSA.PNG"
import evenEase from "../assets/EventEase.PNG"
import madagIAscar from "../assets/MadagIAscar.PNG"
import xShoes from "../assets/X-Shoes.png"


import reactLogo from '../assets/reactlogo.png'
import reactNativeLogo from '../assets/react-native.png'
import djangoLogo from '../assets/django.png'
import postgreLogo from '../assets/LogoPostgreSql.png'
import githubLogo from '../assets/github.png'
import tailwindLogo from '../assets/tailwind.png'
import sassLogo from '../assets/sass-logo.png'
import angularLogo from '../assets/angular-logo.png'
import mongoDbLogo from '../assets/mongo-logo.png'
import nestJsLogo from '../assets/nestjs.svg'

const projectsData = {
  web: [
    {
      id: 1,
      title: "DSA Platform",
      date: "2025",
      image: dsa,
      tech: [reactLogo, djangoLogo, postgreLogo, githubLogo],
    },
    {
      id: 2,
      title: "EventEase",
      date: "2025",
      image: evenEase,
      tech: [angularLogo, nestJsLogo, mongoDbLogo, tailwindLogo, sassLogo, githubLogo],
    },
    {
      id: 3,
      title: "MadagIAscar",
      date: "2024",
      image: madagIAscar,
      tech: [reactLogo, nestJsLogo, postgreLogo, tailwindLogo],
    },
    {
      id: 4,
      title: "X-Shoes",
      date: "2024",
      image: xShoes,
      tech: [reactLogo, djangoLogo, tailwindLogo, githubLogo],
    },
  ],
  mobile: [
    {
      id: 5,
      title: "Mobile Contest App",
      date: "2025",
      description: "Description Lorem ipsum dolor sit amet.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      tech: [reactLogo, djangoLogo],
    },
  ],
};

export { projectsData };