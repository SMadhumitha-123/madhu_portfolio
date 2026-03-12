import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "Multilingual Speech App",
    description: "A smart AI-powered web application that converts speech to text and text to speech across multiple languages. Built with Python and Streamlit, it supports real-time speech recognition, natural voice synthesis, downloadable audio output, and interactive bot functionality for seamless multilingual communication.",
    tech: "Python, Streamlit, SpeechRecognition, gTTS, PyAudio",
    image: "/images/speech.png",
    github: "https://github.com/SMadhumitha-123/Multilingual_Speech_Application",
    demo: "https://drive.google.com/file/d/1pXzc1_vI_UhzAXXnqcdBA8Dkd4bOWyd-/view?usp=drive_link",
  },
  {
    title: "Online Food Ordering System (Deployed)",
      description: "A fully functional and deployed web-based food ordering system that allows users to browse menus, add items to cart, and place orders seamlessly. The application provides an intuitive user interface, smooth navigation, and real-time order management, delivering a complete end-to-end online food ordering experience.",
    tech: "HTML, CSS, JS",
    image: "/images/food.png",
    demo: "https://drive.google.com/file/d/1G7OzSPlTUmLynnS3E_fahhw_Vo6vFcFm/view?usp=drive_link",
  },
  {
  title: "Smart Grid Real-Time Simulator",
  description:"An interactive web-based smart grid simulator designed to model renewable energy integration, intelligent load balancing, battery storage management, and grid stability monitoring. The system performs real-time mathematical simulations to dynamically balance solar, wind, battery, and traditional power sources against fluctuating energy demand through a live dashboard interface.",
  tech: "HTML, CSS, JavaScript, Chart.js",
  image: "/images/smartgrid.png",
  github:"https://github.com/SMadhumitha-123/Smart_Power_Grid",
  demo: "https://drive.google.com/file/d/1HHuTlxQ-z_AmRAxReRlVuZ4Fg1LEbATS/view?usp=drive_link",
  
},
{
    title: "Aaranya Arc - AI based Website for Zoo",
    description: "A responsive and visually engaging zoo management and information website designed to showcase wildlife conservation, animal details, ticket booking, and visitor services. The platform provides an interactive user experience with structured navigation, educational content, and modern UI design to promote awareness about biodiversity and animal conservation.",
    tech: "HTML5, CSS3, JavaScript",
    image: "/images/zoo.png",
    demo: "https://drive.google.com/file/d/1iEE949gHZCLsEJ5U2aWZ1-dRKMIIpLeL/view?usp=drive_link"
  },
  {
    title: "AI Code Snippet Generator",
    description: "This is a team project: An AI-powered desktop application that converts natural language programming requests into ready-to-use code snippets with clear explanations using Large Language Models (LLMs). The system features secure user authentication, conversation history management, theme customization, and local-first storage to ensure privacy, reproducibility, and an interactive developer-friendly experience.",
  tech: "Python, Tkinter, OpenRouter API (LLMs), Requests, dotenv, Local Storage",
    image: "/images/ai.png",
    github: "https://github.com/SMadhumitha-123/AI_CODE_SNIPPET_GENERATOR",
    demo: "https://drive.google.com/file/d/1op3NGC5LHJwbChyS1IhydfDnsQDv1cF2/view?usp=drive_link",
  },
  {
    title: "ADVENTURA - Online Bus Ticket Booking System",
     description: "This is a team project: A full-stack web application that modernizes bus ticket booking by allowing passengers to search buses in real time, select seats interactively, make secure online payments, and receive instant digital tickets. The system includes smart filtering, booking history tracking, and an admin dashboard for managing buses, routes, schedules, and seat layouts.",
  tech: "Java, Spring Boot, MySQL, HTML5, CSS3, JDBC, SQL",
    image: "/images/bus.png",
    github: "https://github.com/SMadhumitha-123/ONLINE_BUS_TICKET_BOOKINGSYSTEM",
    demo: "https://drive.google.com/file/d/1q8_xjeuWV2Mtky7mEyGSaTZ-RvLQ1XMv/view?usp=drive_link", // PDF instead of video
  },
  {
    title: "Industrial Relations Web Portal",
     description: "This is a team project: A full-stack web application designed to manage industry relations activities such as internships, hackathons, industry visits, and faculty–student collaborations within an academic institution. The platform features multi-role authentication, approval workflows, analytics dashboards, report submission, and centralized management for students, faculty, HODs, and the Industry Relations department.",
  tech: "React.js, Node.js, Express.js, MySQL, Tailwind CSS, JWT, Axios",
    image: "/images/ir.jpeg",
    github: "https://github.com/SMadhumitha-123/Industry_Relation_Application",
  },
  {
    title: "Temperature Converter App",
  description: "A user-friendly Android application developed in Android Studio using Kotlin and XML that converts temperature values between Celsius, Fahrenheit, and Kelvin instantly. The app performs accurate real-time calculations with proper input validation and error handling, ensuring reliable results. Designed with a clean and intuitive UI, it demonstrates core Android development concepts including activity lifecycle management, event handling, and responsive interface design.",
  tech: "Kotlin, XML, Android Studio",
    image: "/images/temperature.jpeg",
    demo: "https://drive.google.com/file/d/1KKNFGslSi2rAb7OPpB8KTjwKDtFYHMYQ/view?usp=drive_link",
  },
  {
    title: "Simple Interest Calculator App",
      description: "A user-friendly application that calculates simple interest based on principal amount, interest rate, and time period. The app performs accurate real-time computations with proper input validation and displays instant results. Designed with a clean and intuitive interface, it demonstrates fundamental financial calculation logic, user input handling, and responsive UI development.",

  tech: "Kotlin, XML, Android Studio",
    image: "/images/simple-interest.jpeg",
    demo: "https://drive.google.com/file/d/167P33GSscegI7Y3TP6A2Bad1hoZB0xj3/view?usp=drive_link",
  },
  {
    title: "Smart Music Widget",
     description: "A responsive and interactive web-based music widget that enables users to play, pause, skip tracks, and control audio seamlessly. The application features real-time audio visualization using the Web Audio API, providing dynamic waveform animations and an engaging user experience. Designed with a modern UI, it demonstrates audio processing, event handling, and responsive front-end development.",

  tech: "Kotlin, XML, Android Studio",
    image: "/images/smart-music-widget.jpeg",
    demo: "https://drive.google.com/file/d/1dOLPMCF7mpZVxfMmq6DHaOzJi8UPydqI/view?usp=drive_link"
  },
  
];

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

 const handleDemoClick = (demo) => {
  window.open(demo, "_blank");
};

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech}
            </p>

            <div className="project-links">
              {/* GitHub icon hidden for last 3 projects */}
              {!(index >= projects.length - 3) && project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}

              {/* Demo icon hidden for Industrial Relations project */}
              {project.title !== "Industrial Relations Web Portal (Team Project)" &&
                project.demo && project.demo !== "#" && (
                  <button className="demo-btn" onClick={() => handleDemoClick(project.demo)}>
                    <FaExternalLinkAlt />
                  </button>
                )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="video-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="video-modal"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setActiveVideo(null)}>
                <FaTimes />
              </button>

              <video src={activeVideo} controls muted autoPlay playsInline />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
