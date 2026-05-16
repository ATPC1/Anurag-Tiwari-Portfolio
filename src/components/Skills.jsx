import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { useTheme } from '../context/ThemeContext';

function SkillBar({ name, level, color, isInView, index }) {
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
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(null);
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 relative ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-72 h-72 bg-primary-500" style={{ bottom: '5%', left: '10%', opacity: 0.05 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                          bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Layers size={14} />
            My Skills
          </div>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle mt-3">
            A collection of technologies and tools I use to build great products
          </p>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              className={`card ${isDark ? '' : 'card-light'} cursor-pointer relative overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              onClick={() =>
                setActiveCategory(activeCategory === category.id ? null : category.id)
              }
              whileHover={{ y: -4 }}
            >
              {/* Gradient accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color}`} />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                                 bg-gradient-to-br ${category.color} bg-opacity-10`}
                     style={{ background: 'rgba(99,102,241,0.1)' }}>
                  {category.icon}
                </div>
                <h3 className={`font-heading font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    isInView={isInView}
                    index={catIdx * 5 + idx}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
