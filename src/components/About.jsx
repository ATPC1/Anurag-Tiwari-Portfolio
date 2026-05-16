import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Code2 } from 'lucide-react';
import { techStack } from '../data/skills';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 relative ${isDark ? 'bg-dark-800' : 'bg-white'}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-64 h-64 bg-violet-500" style={{ top: '10%', right: '5%', opacity: 0.05 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                          bg-violet-500/10 border border-violet-500/20 text-violet-400">
            <Code2 size={14} />
            About Me
          </div>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left — Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Hey! I'm <span className="gradient-text font-semibold">Anurag Tiwari</span>, a passionate
                Full Stack Developer and B.Sc. IT student who loves crafting digital experiences that matter.
              </p>
              <p>
                My journey into tech started with curiosity about how websites work, and it quickly turned
                into a passion for building them. I specialize in the <span className="text-primary-400 font-medium">MERN stack</span> (MongoDB, Express.js, React, Node.js)
                and have extensive experience with the <span className="text-primary-400 font-medium">.NET Framework</span>, specifically in building robust applications using **WebForms** and **Windows Forms (WinForms)**.
              </p>
              <p>
                When I'm not coding, you'll find me solving problems on HackerRank, contributing to
                open-source projects, or exploring new tech communities. I believe in writing clean,
                maintainable code and building products that create real value.
              </p>
              <p>
                I'm currently pursuing my degree from the <span className="text-primary-400 font-medium">University of Mumbai</span> and looking for opportunities where I can contribute and grow.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: GraduationCap, label: 'Education', value: 'B.Sc. IT — Mumbai University', color: 'text-cyan-400' },
                { icon: MapPin, label: 'Location', value: 'India 🇮🇳', color: 'text-pink-400' },
                { icon: Calendar, label: 'Experience', value: '2+ Years of Coding', color: 'text-amber-400' },
                { icon: Code2, label: 'Specialization', value: 'MERN Stack Development', color: 'text-violet-400' },
              ].map(({ icon: Icon, label, value, color }) => (
                <motion.div
                  key={label}
                  className={`card ${isDark ? '' : 'card-light'} flex items-start gap-3`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`mt-0.5 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className={`text-xs font-medium mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {label}
                    </div>
                    <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Tech Stack Pills */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-xl font-semibold font-heading mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className={`px-4 py-2 rounded-xl text-sm font-mono font-medium
                              border transition-all duration-200 cursor-default
                              ${isDark
                                ? 'bg-dark-700 border-white/10 text-gray-300 hover:border-primary-500/50 hover:text-primary-400 hover:bg-primary-500/5'
                                : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50'
                              }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Profile stat cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: 'GitHub Repos', value: '10+', color: 'from-gray-600 to-gray-800' },
                { label: 'Projects', value: '10+', color: 'from-primary-500 to-violet-500' },
                { label: 'Cups of Coffee', value: '∞', color: 'from-amber-500 to-orange-500' },
              ].map(({ label, value, color }) => (
                <motion.div
                  key={label}
                  className={`gradient-border p-4 text-center ${isDark ? '' : 'bg-white'}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-2xl font-bold font-heading bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {value}
                  </div>
                  <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
