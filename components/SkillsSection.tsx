import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

export function SkillsSection() {
  const skills = [
    'UI/UX Design',
    'Figma',
    'Adobe Creative Suite',
    'Prototyping',
    'Web Design',
    'Mobile Design',
    'Typography',
    'Color Theory',
    'User Research',
    'Wireframing',
    'Design Systems',
    'Animation'
  ];

  const experience = [
    { period: '2021-2025', title: '4 года в дизайне', description: 'Создание пользовательских интерфейсов' },
    { period: '2023-2025', title: 'Фриланс', description: 'Работа с различными клиентами' },
    { period: '2024-2025', title: 'Минимализм', description: 'Специализация на чистом дизайне' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-5xl mb-8 font-bold">НАВЫКИ</h2>
          <div className="w-24 h-0.5 bg-foreground mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Навыки */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat text-2xl mb-8 font-semibold">Технические навыки</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default font-montserrat"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Опыт */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat text-2xl mb-8 font-semibold">Опыт</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="border-l-2 border-foreground pl-6 hover:border-primary transition-colors duration-300"
                >
                  <div className="text-sm opacity-60 mb-1 font-mono">{item.period}</div>
                  <div className="font-montserrat text-xl mb-2 font-semibold">{item.title}</div>
                  <div className="opacity-70">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Дополнительная секция с достижениями */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '4', label: 'Года опыта' },
              { number: '50+', label: 'Проектов' },
              { number: '∞', label: 'Идей' },
              { number: '100%', label: 'Качества' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div 
                  className="font-montserrat text-4xl font-bold mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="opacity-60 text-sm font-montserrat">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}