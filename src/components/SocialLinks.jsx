import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Share2, ExternalLink } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { useTheme } from '../context/ThemeContext';

function SocialCard({ link, index, isInView }) {
  const { isDark } = useTheme();
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target={link.url.startsWith('mailto') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className={`social-card group relative flex flex-col items-center gap-3 p-5 rounded-2xl
                  border overflow-hidden cursor-pointer ${
                    isDark
                      ? 'bg-dark-700 border-white/5 hover:border-white/20'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  } ${link.hoverColor} hover:shadow-lg`}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, type: 'spring', bounce: 0.3 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Gradient background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

      {/* Icon */}
      <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center
                       bg-gradient-to-br ${link.color} text-white shadow-lg
                       group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} />
      </div>

      {/* Label */}
      <div className="relative z-10 text-center">
        <div className={`font-semibold text-sm font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {link.label}
        </div>
        <div className={`text-xs mt-0.5 truncate max-w-[120px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          {link.username}
        </div>
      </div>

      {/* Description tooltip */}
      <div className={`relative z-10 text-xs text-center ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
        {link.description}
      </div>

      {/* Arrow icon */}
      <ExternalLink
        size={12}
        className={`absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity ${
          isDark ? 'text-gray-500' : 'text-gray-400'
        }`}
      />
    </motion.a>
  );
}

export default function SocialLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useTheme();

  return (
    <section
      id="social"
      ref={ref}
      className={`py-24 relative ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-96 h-96 bg-primary-500" style={{ top: '20%', left: '40%', opacity: 0.04 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                          bg-pink-500/10 border border-pink-500/20 text-pink-400">
            <Share2 size={14} />
            Connect With Me
          </div>
          <h2 className="section-title">Find Me Everywhere</h2>
          <p className="section-subtitle mt-3">
            Let's connect! Whether it's code, business, or just a chat — I'm always reachable
          </p>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {socialLinks.map((link, index) => (
            <SocialCard key={link.id} link={link} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Quick Connect Note */}
        <motion.div
          className={`mt-12 text-center p-6 rounded-2xl border ${
            isDark ? 'bg-dark-700/50 border-white/5' : 'bg-white border-gray-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            💬 Prefer email? Reach me at{' '}
            <a
              href="mailto:anuragtiwari0132@gmail.com"
              className="text-primary-400 hover:text-primary-300 font-medium underline underline-offset-4"
            >
              anuragtiwari0132@gmail.com
            </a>
            {' '}· I reply within 24 hours 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
