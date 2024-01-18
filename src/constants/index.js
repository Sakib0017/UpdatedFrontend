import {
  mobile,
  backend,
  creator,
  gmail,

  medical,
  celebrating,
  
  
  office,
  
  crowd,


  home,
  about,
  branch,
  contact,
  telephone,
  customer,
  doctor,
  freelance,
  login,
  messages,
  signup,
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
} from "../assets";

export const navLinks = [
  {
    id: "home",
    icon: home,
    title: "Patient Portal",
  },
  
  {
    id: "services",
    icon: customer,
    title: "Pakages & Discounts",
  },
  
  {
    id: "work",
    icon: freelance,
    title: "Centres & Services",
  },
 
  {
    id: "doctors",
    icon: doctor,
    title: "Notices",
  },
  {
    id: "branches",
    icon: branch,
    title: "Contact Us",
  },
  
  
  
];



const services = [
  {
    title: "Call for Appointment",
    icon: mobile,
  },
  {
    title: "Find Doctor",
    icon: web,
  },
  {
    title: "Test Charge",
    icon: backend,
  },
  {
    title: "Health Packages",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Popular Diagnostic",
    company_name: "Popular Group",
    icon: starbucks,
    iconBg: "#1c1c1c",
    date: "March 2020 - April 2021",
    points: [
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
    ],
  },
  {
    title: "Popular Hospital",
    company_name: "Popular Group",
    icon: tesla,
    iconBg: "#1c1c1c",
    date: "Jan 2021 - Feb 2022",
    points: [
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
    ],
  },
  {
    title: "Popular Medical College",
    company_name: "Popular Group",
    icon: shopify,
    iconBg: "#1c1c1c",
    date: "Jan 2022 - Jan 2023",
    points: [
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
    ],
  },
  {
    title: "Popular Pharmacitical",
    company_name: "Popular Group",
    icon: meta,
    iconBg: "#1c1c1c",
    date: "Jan 2023 - Present",
    points: [
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Mr. Ahmed",
    designation: "CFO",
    company: "Biman Bangladesh",
    image: "http://populardiagnostic.com/public/testimonial/1-20190319155227.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Mr. Hasan",
    designation: "COO",
    company: "Brac Bank",
    image: "http://populardiagnostic.com/public/testimonial/2-20190319153146.jpg",
  },
  
];

const projects = [
  {
    name: "HEALTH DIAGNOSIS",
    description:
      "Ambulance BD 24 is the best ambulance service in Dhaka, Bangladesh. We provide emergency ambulance service in Dhaka city and transport patient.",
      tags: [
        {
          name: "Incity",
          color: "blue-text-gradient",
        },
        {
          name: "Outsidecity",
          color: "green-text-gradient",
        },
        {
          name: "Abrod",
          color: "pink-text-gradient",
        },
      ],
    image: carrent,
    source_code_link: "http://populardiagnostic.com/",
  },
  {
    name: "HEALTH CONSULTATION",
    description:
      "Blood Bank Management System  Management System (BBMS) under Safe Blood Transfusion Program, HSM, DGHS. Blood Transfusion Transfusion Program, HSM, DGHS.",
    tags: [
      {
        name: "Incity",
        color: "blue-text-gradient",
      },
      {
        name: "Outsidecity",
        color: "green-text-gradient",
      },
      {
        name: "Abrod",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "http://populardiagnostic.com/",
  },
  {
    name: "HEALTH PAKAGES",
    description:
      "We believe everyone should have access to convenient, affordable, and high-quality healthcare. Our health checks and packages help you stay on top of your ",
      tags: [
        {
          name: "Incity",
          color: "blue-text-gradient",
        },
        {
          name: "Outsidecity",
          color: "green-text-gradient",
        },
        {
          name: "Abrod",
          color: "pink-text-gradient",
        },
      ],
    image: tripguide,
    source_code_link: "http://populardiagnostic.com/",
  },
];

const projects1 = [
  {
    name1:"Total Branches",
    description1:"100", 
    image1: office,
    source_code_link: "http://populardiagnostic.com/",
  },
  {
    name1:"Total Patient",
    description1:"100", 
    image1: crowd,
    source_code_link: "http://populardiagnostic.com/",
  },
  {
    name1:"Total Doctors",
    description1:"100", 
    image1: medical,
    source_code_link: "http://populardiagnostic.com/",
  },
  {
    name1:"Happy Patients",
    description1:"100", 
    image1: celebrating,
    source_code_link: "http://populardiagnostic.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, projects1  };
