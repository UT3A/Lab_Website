import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import philosophyImage from 'figma:asset/7dfea1f5c1b7852c620550cf29c2af49891021d4.png';

const philosophyCards = [
  {
    id: 1,
    tag: '溫度',
    tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    title: '不只是冰冷的方法',
    subtitle: 'Warmth in Technology',
    description: '我們更專注在人的問題或需求本身的性質，利用資訊技術設計出不只是冰冷的方法，而是更易於解釋、具有溫度、有效的解決方案',
  },
  {
    id: 2,
    tag: '表達',
    tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    title: '清楚表達邏輯概念',
    subtitle: 'Clear Communication',
    description: '我們訓練的不只是資訊技術，也注重表達和呈現的能力。每個人都能清楚的表達方法的完整邏輯跟概念',
  },
  {
    id: 3,
    tag: '團隊',
    tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    title: '團體作戰而非單打獨鬥',
    subtitle: 'Team Collaboration',
    description: '不需要單打獨鬥，我們是團體作戰，不是各自埋頭苦幹。藉由彼此間大量討論、相互學習進步',
  },
];

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-300 via-slate-900 to-slate-300" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* French Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'rgba(0, 0, 0, 1)',
                  letterSpacing: '0.05em',
                }}
              >
              </motion.p>

              {/* English Title with Gradient */}
                <div className="relative inline-block pt-4">
                  <h3
                    className="relative z-10"
                    style={{
                      fontSize: 'clamp(42px, 5.5vw, 64px)',
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #0ea5e9 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1.1,
                    }}
                  >
                    核心理念
                  </h3>

              {/* Chinese Title */}
              <div className="space-y-2">
                <h2
                  className="text-slate-300"
                  style={{
                    fontSize: 'clamp(24px, 3.5vw, 36px)',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    lineHeight: 1.4,
                  }}
                >
                  在這飛速成長的時代<br />
                  必須持續保有對知識的渴望
                </h2>
                
                
                  
                  {/* Purple Underline 
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 mt-2 origin-left"
                    style={{
                      background: 'linear-gradient(90deg, #a855f7 0%, #8b5cf6 100%)',
                      borderRadius: '2px',
                    }}
                  />*/}
                </div>
              </div>

              {/* Main Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  color: 'rgba(0, 0, 0, 1)',
                  lineHeight: 1.6,
                }}
              >
              </motion.p>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4"
              >
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 300,
                    color: 'rgba(0, 0, 0, 1)',
                    lineHeight: 1.8,
                  }}
                >
                  不只是<strong style={{ fontWeight: 500 }}>找出方法</strong>
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(0, 0, 0, 1)',
                    lineHeight: 1.8,
                  }}
                >
                  不只有<strong style={{ fontWeight: 500 }}>資訊技術</strong>
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(0, 0, 0, 1)',
                    lineHeight: 1.8,
                  }}
                >
                  不需要<strong style={{ fontWeight: 500 }}>單打獨鬥</strong>
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Center: Image with 3D Effect */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5,
                  scale: 1.05,
                }}
                transition={{ duration: 0.4 }}
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Main Image Card */}
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    width: 'clamp(280px, 35vw, 380px)',
                    height: 'clamp(380px, 50vw, 520px)',
                    transform: 'rotateZ(-8deg)',
                  }}
                >
                  <ImageWithFallback
                    src={philosophyImage}
                    alt="Philosophy"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
                    }}
                  />
                  
                  {/* Border Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                    }}
                  />
                </div>

                {/* Shadow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.1))',
                    filter: 'blur(40px)',
                    transform: 'translateZ(-50px) scale(0.95)',
                    zIndex: -1,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Philosophy Cards */}
          <div className="lg:col-span-4 space-y-4">
            {philosophyCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50, rotateZ: 5 }}
                animate={isInView ? { opacity: 1, x: 0, rotateZ: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.03, 
                  x: -8,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div
                  className="relative p-6 rounded-2xl backdrop-blur-sm"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {/* Tag */}
                  <motion.div
                    className="inline-flex items-center gap-2 mb-3"
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className={`px-3 py-1 rounded-full border ${card.tagColor}`}>
                      {card.tag}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h4
                    className="text-white mb-1"
                    style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h4>

                  {/* Subtitle */}
                  <p
                    className="mb-3"
                    style={{
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'rgba(0, 0, 0, 1)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'rgba(0, 0, 0, 1)',
                      lineHeight: 1.7,
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at top right, rgba(168, 85, 247, 0.1), transparent)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>
    </section>
  );
}
