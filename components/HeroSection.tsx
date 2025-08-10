import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function HeroSection() {
  const text = "NEGRYASH";
  const subtitle = "ДИЗАЙНЕР & ГЕЙМЕР";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="hero-title text-8xl md:text-9xl lg:text-[12rem] tracking-tighter leading-none">
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0, rotateX: 90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                }}
                className="inline-block hover:scale-110 hover:text-primary/80 transition-all duration-300 cursor-default"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 20px rgba(0,0,0,0.5)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <p className="font-montserrat text-xl md:text-2xl tracking-widest opacity-70 font-light">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-lg opacity-60 max-w-md mx-auto">
            4 года в дизайне. Создаю минималистичные решения. Люблю игры и эксперименты.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="mt-8 px-8 py-6 text-lg font-montserrat hover:shadow-lg transition-all duration-300"
            >
              Узнать больше
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Улучшенные фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden bg-lines">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
              top: '10%',
              height: '80%',
            }}
            animate={{
              scaleY: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Дополнительные геометрические элементы */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute w-2 h-2 border border-foreground/30 rounded-full"
            style={{
              right: `${15 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </section>
  );
}