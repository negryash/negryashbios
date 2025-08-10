import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Moon, Sun, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navigation({ activeSection, setActiveSection, isDark, toggleTheme }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О себе' },
    { id: 'skills', label: 'Навыки' },
    { id: 'social', label: 'Соцсети' },
    { id: 'blog', label: 'Блог' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <span className="text-xl font-montserrat font-bold tracking-wider">
              NEGRYASH
            </span>
            <motion.div
              className="px-2 py-1 rounded-full bg-primary/10 text-xs font-montserrat"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              bio
            </motion.div>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeSection === item.id ? "default" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className="relative overflow-hidden font-montserrat"
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary rounded-md"
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-md opacity-0"
                  whileHover={{ opacity: 1 }}
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Плавающие частицы */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: '50%',
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </motion.nav>
  );
}