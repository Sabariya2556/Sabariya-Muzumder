import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import DesignProcess from './components/DesignProcess';
import TechStack from './components/TechStack';
import AdditionalInfo from './components/AdditionalInfo';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-obsidian text-white selection:bg-brand/30 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Custom Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0 hidden md:block"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div id="about">
          <About />
        </div>

        <div id="process">
          <DesignProcess />
        </div>

        <TechStack />

        <div id="projects">
          <Projects />
        </div>

        <Experience />
        
        <AdditionalInfo />
        
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
