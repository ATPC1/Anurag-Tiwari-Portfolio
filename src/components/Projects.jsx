import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderOpen, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, categories } from '../data/projects';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(filtered.length - 1, prev + 1));
  };

  // Card gradients
  const gradients = [
    'from-primary-500/20 to-violet-500/20',
    'from-cyan-500/20 to-primary-500/20',
    'from-violet-500/20 to-pink-500/20',
    'from-green-500/20 to-cyan-500/20',
  ];

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
      id="projects"
      className={`py-24 relative overflow-hidden ${isDark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-80 h-80 bg-cyan-500" style={{ top: '0%', right: '0%', opacity: 0.04 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                          bg-primary-500/10 border border-primary-500/20 text-primary-400">
            <FolderOpen size={14} />
            Projects
          </div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle mt-3">
            A showcase of my work — slide horizontally to explore my projects!
          </p>
          <div className="section-divider mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <Filter size={16} className={`mr-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                filter === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : isDark
                    ? 'text-gray-400 hover:text-white hover:bg-white/5 border border-white/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <FolderOpen size={48} className="text-gray-500 mx-auto mb-4 opacity-50" />
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>No projects found in this category.</p>
          </div>
        ) : (
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
            {/* Horizontal Spinner */}
            <div 
              className="relative w-full h-[530px] flex items-center justify-center overflow-visible"
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            >
              <AnimatePresence initial={false} mode="popLayout">
                {filtered.map((project, index) => {
                  const offset = index - activeIndex;
                  const absOffset = Math.abs(offset);

                  // Only render neighbor cards close to activeIndex to improve performance
                  if (absOffset > 2) return null;

                  const gradient = gradients[project.id % gradients.length];
                  const isActive = absOffset === 0;

                  return (
                    <motion.div
                      key={project.id}
                      style={{
                        zIndex: 10 - absOffset,
                        pointerEvents: isActive ? 'auto' : 'none',
                        transformStyle: 'preserve-3d',
                        position: 'absolute',
                      }}
                      className={`w-[290px] sm:w-[360px] md:w-[410px] h-[480px] rounded-2xl flex flex-col justify-between overflow-hidden cursor-grab active:cursor-grabbing border transition-all duration-300
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
                      {/* Image / Placeholder */}
                      <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center border-b ${isDark ? 'border-white/5' : 'border-gray-100'} overflow-hidden`}>
                        {project.image ? (
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        ) : (
                          <div className="text-center">
                            <FolderOpen size={40} className="text-primary-400/50 mx-auto mb-2" />
                            <span className={`text-xs font-mono ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                              Preview Coming Soon
                            </span>
                          </div>
                        )}

                        {project.featured && (
                          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md">
                            ⭐ Featured
                          </div>
                        )}

                        {/* Hover Overlay - only active on the center card */}
                        {isActive && (
                          <div className="absolute inset-0 bg-dark-900/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/20"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaGithub size={16} /> Code
                            </motion.a>
                            {project.demo !== '#' && (
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink size={16} /> Demo
                              </motion.a>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className={`font-heading font-bold text-lg mb-2 transition-colors ${isActive ? 'text-primary-400' : isDark ? 'text-white' : 'text-gray-900'}`}>
                            {project.title}
                          </h3>
                          <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {project.description}
                          </p>
                        </div>

                        <div>
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tech.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className={`text-xs px-2 py-0.5 rounded-md font-mono border ${
                                  isDark
                                    ? 'bg-primary-500/10 border-primary-500/20 text-primary-400'
                                    : 'bg-primary-50 border-primary-200 text-primary-700'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className={`text-xs px-2 py-0.5 rounded-md font-mono ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                +{project.tech.length - 4} more
                              </span>
                            )}
                          </div>

                          {/* Footer Links */}
                          <div className="flex gap-4 pt-4 border-t border-gray-100/10">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                                isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                              }`}
                            >
                              <FaGithub size={15} /> GitHub
                            </a>
                            {project.demo !== '#' && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors ml-auto"
                              >
                                <ExternalLink size={15} /> Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Slider Arrow Controls (Only show if there are multiple projects) */}
              {filtered.length > 1 && (
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
                    aria-label="Previous Project"
                  >
                    <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={activeIndex === filtered.length - 1}
                    className={`absolute right-0 sm:-right-6 md:-right-12 lg:-right-20 z-30 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300
                      ${activeIndex === filtered.length - 1 
                        ? 'opacity-20 cursor-not-allowed border-gray-700 text-gray-500' 
                        : isDark
                          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 active:scale-95'
                          : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:scale-110 active:scale-95 shadow-md'
                      }`}
                    aria-label="Next Project"
                  >
                    <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Indicator Dots */}
            {filtered.length > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6 z-20">
                {filtered.map((_, idx) => (
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
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/ATPC1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FaGithub size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
