import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-5xl mb-8 font-bold">О СЕБЕ</h2>
          <div className="w-24 h-0.5 bg-foreground mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 border-0 bg-muted/50">
              <h3 className="font-montserrat text-2xl mb-4 font-semibold">Дизайнер</h3>
              <p className="opacity-70 leading-relaxed">
                Занимаюсь дизайном уже 4 года. Специализируюсь на минималистичных решениях,
                которые сочетают функциональность и эстетику. Каждый проект — это новый вызов
                и возможность создать что-то особенное.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 border-0 bg-muted/50">
              <h3 className="font-montserrat text-2xl mb-4 font-semibold">Геймер</h3>
              <p className="opacity-70 leading-relaxed">
                Игры — это не просто хобби, это источник вдохновения. Они учат меня понимать
                пользовательский опыт, интерактивность и то, как создавать захватывающие
                интерфейсы.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl opacity-60 max-w-2xl mx-auto italic">
            "Хороший дизайн невидим. Он работает так естественно, 
            что пользователь даже не замечает его присутствия."
          </p>
          <motion.div
            className="w-16 h-px bg-foreground/50 mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
}