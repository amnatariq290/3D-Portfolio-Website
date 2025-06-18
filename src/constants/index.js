
import {
    html,
    css,
    javascript,
    react,
    tailwindcss,
    github,
    python,
    java,
    aws,
    voice,
    contact,
    linkedin,
    resumeanalyzer,
    accessibility,
    reactportfolio,
   
  } from "../assets/icons"; // Make sure these icons exist or are added
  
  export const skills = [
    { imageUrl: html, name: "HTML", type: "Frontend" },
    { imageUrl: css, name: "CSS", type: "Frontend" },
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: python, name: "Python", type: "Programming" },
    { imageUrl: java, name: "Java", type: "Programming" },
    { imageUrl: aws, name: "AWS", type: "Cloud" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
  ];
  
  export const experiences = [
    {
      title: "Freelance Web Developer",
      company_name: "Self-Employed",
      icon: react,
      iconBg: "#D9EAD3",
      date: "Jan 2024 - Present",
      points: [
        "Developed responsive websites using Webflow and React.",
        "Built accessibility and AI-powered tools with Python & Streamlit.",
        "Worked with clients on Web projects via Fiverr.",
      ],
    },
    {
      title: "Student Projects",
      company_name: "UET Taxila",
      icon: react,
      iconBg: "#F4CCCC",
      date: "Aug 2023 - Present",
      points: [
        "Built Smart Resume Analyzer using NLP & ML.",
        "Created 3D React Portfolio and Accessibility Checker.",
        "Worked with ATmega32 for embedded systems and robotics.",
      ],
    },
  ];
  
  export const socialLinks = [
    {
      name: "Contact",
      iconUrl: contact,
      link: "/contact",
    },
    {
      name: "GitHub",
      iconUrl: github,
      link: "https://github.com/amnatariq290",
    },
    {
      name: "LinkedIn",
      iconUrl: linkedin,
      link: "https://www.linkedin.com/in/amna-tariq-201253345/",
    },
  ];
  
  export const projects = [
    {
      iconUrl: resumeanalyzer,
      theme: "btn-back-blue",
      name: "Smart Resume Analyzer",
      description:
        "A Streamlit app that analyzes uploaded resumes and recommends jobs or courses using NLP and ML.",
      link: "https://smart-ai-resume-analyzer-and-job-recommender-fazmmgt5gzjjt6q65.streamlit.app/",
    },
    {
      iconUrl: accessibility,
      theme: "btn-back-green",
      name: "Accessibility Analyzer",
      description:
        "Python + Selenium based web tool to evaluate accessibility of websites based on WCAG standards.",
      link: "https://github.com/amnatariq290/Accessibility-Analyzer",
    },
    {
      iconUrl: reactportfolio,
      theme: "btn-back-yellow",
      name: "3D Interactive Portfolio",
      description:
        "A visually rich interactive 3D portfolio made using React Three Fiber, showcasing my projects and skills.",
      link: "https://gentle-sunflower-d0a7b9.netlify.app/",
    },
    {
  iconUrl: voice, // You can change this to a mic icon or anything else if you have one
  theme: "btn-back-purple",
  name: "Java Voice Assistant",
  description:
    "A desktop application built using Java that responds to voice commands to perform tasks like opening apps, telling time, and more.",
  link: "https://github.com/amnatariq290/Java-Voice-Assistant", // Replace with actual GitHub if available
},

  ];
  
  
  
