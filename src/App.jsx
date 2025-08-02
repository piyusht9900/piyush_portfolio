import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import VideoSection from './components/VideoSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Experience from './components/Experience';
import Certification from './components/Certification';
import Education from './components/Education';
import Github from './components/Github';


function App() {
  const contactRef = useRef(null); 

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      <Hero contactRef={contactRef} /> 
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certification />
      <Education />
      <Github />
      <Contact contactRef={contactRef} /> 
      <Footer />
    </div>
  );
}

export default App;
