import React from "react";
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBrain,
  FaChartBar,
  FaAndroid
} from "react-icons/fa";
import { SiC, SiCplusplus, SiMysql, SiMongodb, SiDjango, SiExpress, SiNodedotjs, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skillGroups = [
  {
    title: "Programming",
    skills: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "JavaScript", icon: <FaJsSquare /> }
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Django", icon: <SiDjango /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "React.js", icon: <FaReact /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> }
      
    ]
  },
  {
    title: "Technologies",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Machine Learning", icon: <FaBrain /> },
      { name: "NLP", icon: <FaBrain /> },
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "MERN Stack", icon: <FaReact /> },
      { name: "Android SDK", icon: <FaAndroid /> } // <-- Added here
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills and Experience</h2>

      {skillGroups.map((group, gIndex) => (
        <motion.div
          key={gIndex}
          className="skill-group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="group-title">{group.title}</h3>

          <div className="skills-grid">
            {group.skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{
                  scale: 1.12,
                  rotate: 2,
                  boxShadow: "0px 0px 25px rgba(0,255,255,0.7)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="skill-icon">{skill.icon}</span>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};
export default Skills;
