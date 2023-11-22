import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Html Developer",
      icon: html,
    },
    {
      title: "CSS Developer",
      icon: css,
    },
    {
      title: "Javascript Developer",
      icon: javascript,
    },
    {
      title: "React Js Developer",
      icon: reactjs,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  
  const projects = [
    {
      name: "Tip Calculator",
      description:
        `This tip calculator offers a convenient way to quickly compute
        recommended tip amounts for services and also facilitates
        splitting the tip among multiple individuals. Users input the
        total bill amount and specify the desired tip percentage.`,
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ARFA-ATIF/Tip_Calculator",
    },
    {
      name: "Super Hero App",
      description:
        `This basic superhero app enables users to randomly explore
        or discover new superheroes. Users can access detailed profiles
       showcasing each hero's unique abilities, such as Intelligence, Strength, Speed, Durability, Power and
        Combat.`,
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ARFA-ATIF/SUPER_HERO_APP",
    },
    {
      name: "DOG API",
      description:
        "Get random dog images or specific breed images for your projects. Enhance your applications, websites, or software with delightful dog-related content.our Dog API offers a rich resource to integrate engaging dog-related data into your projects.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ARFA-ATIF/DOG_API",
    },
  ];
  
  export { services, technologies, projects };