import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Technical Analyst",
    company_name: "Services Australia",
    date: "12/2023 - Present",
    details: [
      "Managed technical support and customer service for <span style='color: white;'>Medicare & Centrelink,</span> including processing transactions, managing account-related issues and overseeing program management",
      "Implemented customized IT solutions for customers facing significant disadvantages or complex challenges, assessing their technical needs and determining appropriate resources and support.",
      "Spearheaded collaboration in professional team environments through leadership roles, gaining extensive experience.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Taskmaster",
    date: "01/2024 - 07/2024",
    details: [
      "<span style='color: white;'>Personal Project:</span>",
      "Created a mobile application for task management using <span style='color: white;'>Java & Flutter</span>.",
      "Implemented features such as task scheduling, reminders, and progress tracking.",
      "Published the app on Google Play Store and gathered user feedback for improvements.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Various Projects",
    date: "01/2024 - 04/2024",
    details: [
      "<span style='color: white;'>Personal Project:</span>", 
      "Designed and developed custom websites for small businesses using <span style='color: white;'>HTML, CSS & JavaScript.</span>",
      "Integrated e-commerce functionalities and improved site SEO for better visibility.",
      "Provided ongoing maintenance and updates for client websites.",
    ],
  },
  {
    title: "Student",
    company_name: "Pendle Hill High School",
    date: "04/2019 - 08/2020",
    details: [
     "<span style='color: white;'>Personal Project:</span>",
      "Coded a robot using <span style='color: white;'>Python,</span> to perform functions such as walking and avoiding obstacles. ",
      "Integrated various sensors and hardware components to enhance the robot's functionality and reliability."
    ],
  },
];

const portfolio = [
  {
    name: "Taskmaster",
    description:
      "Developed a task management mobile application featuring task scheduling, reminders, and progress tracking.",
    image: oscs,
  },
  {
    name: "Various Projects",
    description:
      "Designed and developed custom websites for small businesses, integrating e-commerce functionalities and improving site SEO for better visibility",
    image: devnotes,
  },
  
];

export { experiences, portfolio };

