import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ExternalLink, MessageCircle } from 'lucide-react';

export function SocialSection() {
  const socialLinks = [
    {
      name: 'TikTok',
      handle: '@swmakxp',
      url: 'https://tiktok.com/@swmakxp',
      description: 'Креативный контент и дизайн-процессы',
      color: 'hover:bg-black hover:text-white',
      icon: <div className="w-4 h-4 bg-current rounded-sm" />
    },
    {
      name: 'Telegram',
      handle: '@scarydildo',
      url: 'https://t.me/scarydildo',
      description: 'Для связи и обсуждений',
      color: 'hover:bg-blue-500 hover:text-white',
      icon: <MessageCircle className="w-4 h-4" />
    }
  ];

  return (
    <section id="social" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-5xl mb-8 font-bold">СОЦСЕТИ</h2>
          <div className="w-24 h-0.5 bg-foreground mx-auto mb-8"></div>
          <p className="text-xl opacity-60">
            Следите за моими проектами и процессом создания
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-2xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-muted/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-3 rounded-full bg-foreground/10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {social.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-montserrat text-xl font-semibold">{social.name}</h3>
                        <span className="text-lg opacity-60 font-mono">{social.handle}</span>
                      </div>
                      <p className="opacity-70">{social.description}</p>
                    </div>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className={`ml-4 ${social.color} transition-all duration-300 border-foreground/20`}
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="opacity-60 mb-6">
            Есть вопросы или идеи? Напишите мне в Telegram!
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-3 font-montserrat"
              onClick={() => window.open('https://t.me/scarydildo', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Написать в Telegram
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}