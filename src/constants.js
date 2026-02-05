// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import prp_logo from "./assets/education_logo/prp_logo.png";
import ganeahdasrathi from "./assets/education_logo/ganeahdasrathi.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import greenGamesLogo from "./assets/work_logo/Green_games.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import EmployeeLogo from "./assets/work_logo/employee_management_system.png";
import studySyncLogo from "./assets/work_logo/study_sync.png";
import tpCellLogo from "./assets/work_logo/T&P Portel.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "AI/ML Intern",
    company: "Google (via Edu-net, AICTE)",
    date: "April 2025 - Present",
    desc: "Developing machine learning models for NLP and computer vision applications. Building scalable AI pipelines and optimizing algorithms for enterprise solutions. Collaborating with engineering teams to deploy models into production environments.",
    skills: [
      "Machine Learning",
      "AI Algorithms",
      "Python",
      "TensorFlow/PyTorch",
      "Data Analysis",
      "Model Training",
      "Neural Networks",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "AWS Cloud Intern",
    company: "Amazon Web Services (via Edu-net, AICTE)",
    date: "July 2024 - March 2025",
    desc: "Designed and deployed AWS cloud infrastructure with focus on scalability and security. Implemented serverless architectures using Lambda and configured VPCs for secure networking. Assisted in application migration to AWS cloud with cost optimization strategies.",
    skills: [
      "AWS Services",
      "Cloud Architecture",
      "EC2",
      "S3",
      "Lambda",
      "CloudFormation",
      "IAM",
      "VPC",
    ],
  },

  {
    id: 0,
    img: newtonschoolLogo,
    role: "Fullstack Developer",
    company: "Geeks for Geeks",
    date: "April 2024 - Oct 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
];
export const education = [
  {
    id: 1,
    img: prp_logo,
    school: "P R Pote College of Engineering & Management, Amravati",
    date: "Aug 2024 - May 2028",
    grade: "8.6 CGPA",
    desc: "Currently pursuing B.Tech in Computer Science and Engineering, focusing on core subjects like Data Structures, Algorithms, Database Management Systems, and Web Development. Actively engaged in practical projects and technical skill development in software engineering and emerging technologies.",
    degree: "Bachelor of Technology - BTech (Computer Science & Engineering)",
  },
  {
    id: 2,
    img: ganeahdasrathi,
    school: "Shri Deorao Dada Junior College, Teosa",
    date: "June 2022 - March 2024",
    grade: "79.17%",
    desc: "Completed Higher Secondary Education (XII) with Physics, Chemistry, Mathematics, and Biology (PCMB). Developed strong analytical and scientific foundation while balancing technical and life sciences subjects, preparing for engineering entrance examinations.",
    degree: "HSC(XII) - PCMB ",
  },
  {
    id: 3,
    img: ganeahdasrathi,
    school: "Shri Deorao Dada High School, Teosa",
    date: "June 2021 - March 2022",
    grade: "89.8%",
    desc: "I completed my class 10 education from Shri Deorao Dada High School, Teosa, under the SSC board, where I studied Science with Computer.",
    degree: "SSC(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 6, // Or the next sequential ID
    title: "SkyCast Weather App",
    description:
      "A sleek and responsive weather application built with React.js that provides real-time meteorological data. By integrating a weather API, the app delivers accurate temperature, humidity, and wind speed information for any searched city. It features a clean, card-based UI with dynamic icons to enhance the user experience.",
    image: githubdetLogo, // Ensure you import your screenshot or logo as this variable
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Weather API"],
    github: "https://github.com/shreyasdakhole44/SkyCast-Weather-App", // Update with your actual repo
    webapp: "https://weather-app-using-react-js-rho.vercel.app/", // Update with your actual deployment link
  },
  {
    id: 5,
    title: "GreenGames",
    description:
      "A gamified educational dashboard that categorizes learning content by school standards, such as Primary and Middle School. The application features interactive progress tracking with circular data visualizations and a clean, student-friendly interface to make academic growth engaging and visually intuitive.",
    image: greenGamesLogo,
    tags: [
      "React JS",
      "Javascript",
      "Mongo Db",
      "Node Js",
      "Tailwind CSS",
      "Education Tech",
    ],
    github: "https://github.com/shreyasdakhole/GreenGames", // Replace with your actual repo
    webapp: "https://greengames.netlify.app", // Replace with your actual deployment
  },
  {
    id: 3,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/shreyas/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 4,
    title: "StudySync",
    description:
      "An innovative educational landing page designed to provide a seamless learning experience for students. The platform focuses on simplifying education through a transformative journey, featuring a modern, responsive UI with clear calls to action like 'Start Now' and 'Take Tour' to engage users effectively.",
    image: studySyncLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Responsive Design"],
    github: "https://github.com/shreyasdakhole44/StudySync-EdTech",
    webapp: "https://study-sync-ed-tech.vercel.app/",
  },
  {
    id: 2, // Sequential ID following your previous entries
    title: "Employee Management System",
    description:
      "A robust full-stack workforce management system designed to streamline task assignment and tracking. The platform features a secure authentication system using JWT and BCrypt, allowing for distinct admin and employee dashboards. Admins can assign tasks while employees can update their progress in real-time, all managed through a scalable MongoDB database.",
    image: EmployeeLogo, // Match your import for employee_management_system.png
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "BCrypt",
      "Tailwind CSS",
    ],
    github: "https://github.com/shreyasdakhole44/employee-management-system", // Based on your project name
    webapp: "https://employee-management-system-kappa-nine.vercel.app/", // Replace with your actual deployment link
  },
  {
    id: 1,
    title: "AI T&P Cell Portal",
    description:
      "A sophisticated MERN stack platform designed to automate university placement workflows. It features AI-driven performance evaluation and NLP-based mock interviews to enhance student readiness. The portal includes secure, role-based dashboards for students, faculty, and placement officers, utilizing JWT for session management and Bcrypt for data security.",
    image: tpCellLogo, // Match your import for T&P Portel.jpg
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "Bcrypt",
      "Tailwind CSS",
    ],
    github: "https://github.com/RAJRAUT2324/T-P",
    webapp: "https://tandp.netlify.app/",
  },
];
