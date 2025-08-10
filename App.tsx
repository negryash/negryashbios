import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MouseTrail } from './components/MouseTrail';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { SocialSection } from './components/SocialSection';
import { BlogSection } from './components/BlogSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Проверяем системную тему при загрузке
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Применяем тему к документу
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <MouseTrail isDark={isDark} />
      
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <SocialSection />
        <BlogSection />
      </main>
      
      <footer className="py-8 text-center border-t border-border">
        <p className="opacity-60">© 2025 negryash. Все права защищены.</p>
      </footer>
    </div>
  );
}