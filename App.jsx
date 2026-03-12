import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import ChatBot from "./components/ChatBot";
import Hobby from "./components/Hobby";
import Profiles from "./components/Profiles";
import "./index.css";
import "./styles/App.css";

function App() {

  useEffect(() => {
    const pop = (e) => {
      const dot = document.createElement("span");
      dot.className = "cursor-pop-dot";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      // Optional: random size for more natural effect
      const size = Math.random() * 8 + 6; // 6px to 14px
      dot.style.width = dot.style.height = `${size}px`;

      document.body.appendChild(dot);

      setTimeout(() => dot.remove(), 600);
    };

    window.addEventListener("mousemove", pop);
    return () => window.removeEventListener("mousemove", pop);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ChatBot />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Profiles />
      <Projects />
      <Certificates />
      <Achievements />
      <Hobby />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
