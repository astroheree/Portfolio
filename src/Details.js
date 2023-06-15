// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Aman Kumar",
  tagline: "I build things for web",
  img: profile,
  about: `I am a web developer and competitive programmer with expertise in React and Node.js. With a strong foundation in data structures and algorithms, I possess advanced problem-solving skills that I apply to develop efficient and scalable web applications. I thrive on solving complex challenges and am constantly expanding my knowledge to stay at the forefront of the industry. `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/aman-kumar-astro/",
  github: "https://github.com/astroheree",
  twitter: "https://twitter.com/",
  leetcode: "https://leetcode.com/astro_here/"
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `TeachNook`,
    Location: "Bengaluru",
    works : "I collaborated as a front-end developer in a team of two to create a responsive weather app. Utilizing JavaScript, HTML5, and CSS3, we delivered an intuitive interface that provides accurate and up-to-date weather information to users worldwide. Our focus was on responsiveness and user-friendly design to ensure a seamless experience across devices.",
    Type: "Full Time",
    Duration: "June 2022 - Sep 2022",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2021",
  },
  {
    Position: "Bachelor in Computer Science and Game Tech",
    Company: `Vellore Institute of Technology`,
    Location: "Bhopal",
    Type: "Full Time",
    Duration: "Sep 2020 - Present",
  },
  {
    Position: "Class 12th",
    Company: `Guru Gobind Singh Public School, Jharkhand`,
    Location: "Bokaro",
    Type: "Full Time",
    Duration: "Sep 2020",
  },
  {
    Position: "Class 10th",
    Company: `Guru Gobind Singh Public School, Jharkhand`,
    Location: "Bokaro",
    Type: "Full Time",
    Duration: "Sep 2018",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "NFT MaketPlace",
    image: projectImage1,
    description: `Developed a full-stack NFT marketplace application promoting tribal art of Madhya Pradesh's
    local communities. Enabled users to securely buy, sell, and purchase diverse NFTs while implementing
    logging authentication.`,
    techstack: "HTML5, CSS3, JavaScript, ReactJS, ExpressJS, NodeJS and MongoDB",
    githubLink: "https://github.com/astroheree/NFT-MarketPlace",
  },
  {
    title: "Order your Food Now",
    image: projectImage2,
    description: `Built a food ordering app for a college campus, expanding dining options for students within the
    premises. Implemented a user-friendly interface with quick access to a variety of food options.
    Disabling unavailable items, enhancing the user experience and ensuring accurate ordering.
    `,
    techstack: "HTML5, CSS3, ReactJS.",
    githubLink: "https://github.com/astroheree/Food-Ordering-App",
  },
  {
    title: "My Portfolio",
    image: projectImage3,
    description: `Implemented a responsive portfolio web application and consistently updating it to showcase
    the latest projects and achievements including seamless navigation and intuitive interactions for smooth
    browsing experience with attention to detail.`,
    techstack: " HTML5, CSS3, ReactJS",
    githubLink: "https://github.com/astroheree/Portfolio",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "aman.kumar.astro@gmail.com",
  phone: "+91 7545076293",
};
