import {
    mobile,
    backend,
    creator,
    web,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    designtool,
    luhvee,
    tuliprint,
    collage,
    graphite,
    graphite2,
    arihant,
    sterling,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  export const services = [
    {
      title: "Laravel Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Node Js Developer",
      icon: backend,
    },
    {
      title: "HTML/CSS/JavaScript Developer",
      icon: creator,
    },
  ];
  
 export const technologies = [
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
 export const experiences = [
    {
      title: "React.js Developer",
      company_name: "Sterling Technolabs",
      icon:sterling,
      iconBg: "#383E56",
      date: "Feb 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Laravel Developer",
      company_name: "Arihant Web Consultancy",
      icon:arihant,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Helix Solution",
      icon: shopify,
      iconBg: "#383E56",
      date: "Oct 2019 - Jan 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
export const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
export const projects = [
    {
      name: "Designtool",
      description:
        "Web-based platform that allows users to design their own card , posters, books , giftcards , letterpad, tshirts,cusions or any other product ,logo,Outlet for product using this tool ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fabric",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: designtool,
      //source_code_link: "https://github.com/",
    },
    {
      name: "Tuliprint",
      description:
        "Web application that enables users to design different fabric as per requirment using different image and different overlay",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fabric js",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tuliprint,
      source_code_link: "https://github.com/",
    },
    {
      name: "Collage",
      description:
        "Create web base apllication for designing photo tiles , collage image and frame and wall sign to allow user to check preview and generate output ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: collage,
      source_code_link: "https://github.com/",
    },
    {
      name: "Luhvee",
      description:
        "Create dashboard and integrate order section to place order from admin side and integrate third party designtool with 3rd party api",
      tags: [
        {
          name: "Larvel",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css/Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image:luhvee,
      source_code_link: "https://github.com/",
    },
    {
      name: "Graphite",
      description:
        "Created project from where user can purchase different policies and can claim for policy. ",
      tags: [
        {
          name: "Larvel",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css/Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image:graphite,
      source_code_link: "https://github.com/",
    },
    {
      name: "Graphite",
      description:
        "Created project from where user can purchase different policies and can claim for policy this one for different country. ",
      tags: [
        {
          name: "Larvel",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css/Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image:graphite2,
      source_code_link: "https://github.com/",
    },
  ];
  