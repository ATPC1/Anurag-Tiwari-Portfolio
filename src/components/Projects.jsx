import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderOpen, Filter } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, categories } from '../data/projects';
import { useTheme } from '../context/ThemeContext';

function ProjectCard({ project, index, isInView }) {
  const { isDark } = useTheme();
  const gradients = [
    'from-primary-500/20 to-violet-500/20',
    'from-cyan-500/20 to-primary-500/20',
    'from-violet-500/20 to-pink-500/20',
    'from-green-500/20 to-cyan-500/20',
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group card ${isDark ? '' : 'card-light'} overflow-hidden flex flex-col`}
    >
      {/* Project Image / Placeholder */}
      <div className={`relative h-44 rounded-xl overflow-hidden mb-4 bg-gradient-to-br ${gradient}
                       flex items-center justify-center border ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <FolderOpen size={40} className="text-primary-400/50 mx-auto mb-2" />
            <span className={`text-xs font-mono ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              {/* TODO: Add project screenshot */}
              Preview Coming Soon
            </span>
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold
                          bg-gradient-to-r from-amber-500 to-orange-500 text-white">
            ⭐ Featured
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20
                       text-white text-sm font-medium transition-colors border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={16} /> Code
          </motion.a>
          {project.demo !== '#' && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600
                         text-white text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} /> Demo
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className={`font-heading font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2.5 py-1 rounded-lg font-mono border ${
                isDark
                  ? 'bg-primary-500/10 border-primary-500/20 text-primary-400'
                  : 'bg-primary-50 border-primary-200 text-primary-700'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className={`text-xs px-2.5 py-1 rounded-lg font-mono ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`}>
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-white/5">
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
              className="flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('all');
  const { isDark } = useTheme();

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 relative ${isDark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-80 h-80 bg-cyan-500" style={{ top: '0%', right: '0%', opacity: 0.04 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                          bg-primary-500/10 border border-primary-500/20 text-primary-400">
            <FolderOpen size={14} />
            Projects
          </div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle mt-3">
            A showcase of my work — from full-stack apps to open source contributions
          </p>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Filter size={16} className={`my-auto ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
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
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com/ATPC1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FaGithub size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
