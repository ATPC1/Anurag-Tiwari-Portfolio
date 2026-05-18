import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { useTheme } from '../context/ThemeContext';

function SkillBar({ name, level, color, isActive, isInView, index }) {
  const { isDark } = useTheme();
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {name}
        </span>
        <span className={`text-xs font-mono font-semibold ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          {level}%
        </span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={(isInView && isActive) ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.0, delay: 0.15 + (index % 5) * 0.08, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(skillCategories.length - 1, prev + 1));
  };

  // Dynamic spacing based on screen width
  const getSpacing = () => {
    if (width < 480) return 130;
    if (width < 640) return 185;
    if (width < 768) return 245;
    if (width < 1024) return 305;
    return 360;
  };

  const spacing = getSpacing();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 relative overflow-hidden ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-72 h-72 bg-primary-500" style={{ bottom: '5%', left: '10%', opacity: 0.05 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                          bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Layers size={14} />
            My Skills
          </div>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle mt-3">
            A showcase of my core capabilities — slide horizontally to view my technical CV proficiencies!
          </p>
          <div className="section-divider mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Horizontal Spinner */}
          <div 
            className="relative w-full h-[470px] flex items-center justify-center overflow-visible"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {skillCategories.map((category, index) => {
                const offset = index - activeIndex;
                const absOffset = Math.abs(offset);

                // Only render neighbor cards close to activeIndex to improve performance
                if (absOffset > 2) return null;

                const isActive = absOffset === 0;

                return (
                  <motion.div
                    key={category.id}
                    style={{
                      zIndex: 10 - absOffset,
                      pointerEvents: isActive ? 'auto' : 'none',
                      transformStyle: 'preserve-3d',
                      position: 'absolute',
                    }}
                    className={`w-[290px] sm:w-[350px] md:w-[390px] h-[410px] rounded-2xl flex flex-col justify-between overflow-hidden cursor-grab active:cursor-grabbing border transition-all duration-300 p-6
                      ${isActive 
                        ? isDark 
                          ? 'bg-dark-700 border-primary-500/40 shadow-[0_0_35px_rgba(99,102,241,0.25)]' 
                          : 'bg-white border-primary-400/50 shadow-[0_15px_35px_rgba(99,102,241,0.15)]'
                        : isDark
                          ? 'bg-dark-700/60 border-white/5 opacity-60 backdrop-blur-sm'
                          : 'bg-white/80 border-gray-200 opacity-60 backdrop-blur-sm'
                      }`}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.5}
                    onDragEnd={(e, info) => {
                      const swipeThreshold = 50;
                      if (info.offset.x < -swipeThreshold) {
                        handleNext();
                      } else if (info.offset.x > swipeThreshold) {
                        handlePrev();
                      }
                    }}
                    animate={{
                      x: offset * spacing,
                      scale: isActive ? 1 : 0.82,
                      opacity: isActive ? 1 : absOffset === 1 ? 0.65 : 0.25,
                      rotateY: offset * -18,
                      z: isActive ? 0 : -100,
                    }}
                    transition={{
                      type: 'tween',
                      ease: 'easeOut',
                      duration: 0.18,
                    }}
                  >
                    {/* Gradient accent top bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />

                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-6 mt-2">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                                         bg-gradient-to-br ${category.color} bg-opacity-10`}
                             style={{ background: 'rgba(99,102,241,0.1)' }}>
                          {category.icon}
                        </div>
                        <h3 className={`font-heading font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-4">
                        {category.skills.map((skill, idx) => (
                          <SkillBar
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                            color={category.color}
                            isActive={isActive}
                            isInView={isInView}
                            index={index * 5 + idx}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Slider Arrow Controls */}
            {skillCategories.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  className={`absolute left-0 sm:-left-6 md:-left-12 lg:-left-20 z-30 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300
                    ${activeIndex === 0 
                      ? 'opacity-20 cursor-not-allowed border-gray-700 text-gray-500' 
                      : isDark
                        ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 active:scale-95'
                        : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:scale-110 active:scale-95 shadow-md'
                    }`}
                  aria-label="Previous Skill Category"
                >
                  <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={handleNext}
                  disabled={activeIndex === skillCategories.length - 1}
                  className={`absolute right-0 sm:-right-6 md:-right-12 lg:-right-20 z-30 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300
                    ${activeIndex === skillCategories.length - 1 
                      ? 'opacity-20 cursor-not-allowed border-gray-700 text-gray-500' 
                      : isDark
                        ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 active:scale-95'
                        : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:scale-110 active:scale-95 shadow-md'
                    }`}
                  aria-label="Next Skill Category"
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Indicator Dots */}
          {skillCategories.length > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6 z-20">
              {skillCategories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-6 bg-primary-500'
                      : isDark
                        ? 'w-2 bg-white/20 hover:bg-white/40'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Proficiency Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { range: '90-100%', label: 'Expert', color: 'bg-green-500' },
            { range: '75-89%', label: 'Advanced', color: 'bg-primary-500' },
            { range: '60-74%', label: 'Intermediate', color: 'bg-amber-500' },
            { range: '<60%', label: 'Learning', color: 'bg-red-400' },
          ].map(({ range, label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${color}`} />
              <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {label} ({range})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
