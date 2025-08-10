import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

export function BlogSection() {
  const blogPosts = [
    {
      title: 'Минимализм в дизайне: когда меньше значит больше',
      excerpt: 'Разбираем принципы минималистичного дизайна и как он влияет на пользовательский опыт.',
      date: '15 марта 2025',
      readTime: '5 мин',
      tags: ['дизайн', 'минимализм', 'ux'],
      status: 'coming-soon'
    },
    {
      title: 'Цветовая психология в игровом дизайне',
      excerpt: 'Как цвета влияют на эмоции игроков и создают нужную атмосферу в игре.',
      date: '22 марта 2025',
      readTime: '7 мин',
      tags: ['игры', 'психология', 'цвет'],
      status: 'coming-soon'
    },
    {
      title: 'Мой путь в дизайне: от новичка до профессионала',
      excerpt: 'История моего становления как дизайнера за 4 года работы.',
      date: '30 марта 2025',
      readTime: '10 мин',
      tags: ['личное', 'опыт', 'карьера'],
      status: 'coming-soon'
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-5xl mb-8 font-bold">БЛОГ</h2>
          <div className="w-24 h-0.5 bg-foreground mx-auto mb-8"></div>
          <p className="text-xl opacity-60 max-w-2xl mx-auto">
            Скоро здесь появятся статьи о дизайне, играх и моем опыте. 
            Подписывайтесь на соцсети, чтобы не пропустить!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-background relative overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="opacity-60 font-montserrat">
                      {post.status === 'coming-soon' ? 'Скоро' : 'Опубликовано'}
                    </Badge>
                    <span className="text-sm opacity-50 font-mono">{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-montserrat text-xl mb-3 opacity-70 font-semibold">{post.title}</h3>
                  <p className="opacity-60 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs opacity-50 font-mono">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-50 font-mono">{post.date}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      disabled={post.status === 'coming-soon'}
                      className="opacity-50 font-montserrat"
                    >
                      Читать
                    </Button>
                  </div>
                </div>
                
                {post.status === 'coming-soon' && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-center"
                    >
                      <div className="text-2xl mb-2">⏳</div>
                      <div className="opacity-70 font-montserrat">Готовится к публикации</div>
                    </motion.div>
                  </div>
                )}
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
          <p className="opacity-60 mb-6 font-montserrat">
            Есть идеи для статей? Напишите мне в Telegram!
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 font-montserrat"
              onClick={() => window.open('https://t.me/scarydildo', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Написать идею
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}