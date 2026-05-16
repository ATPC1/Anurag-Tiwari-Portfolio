import { motion } from 'framer-motion';
import { Heart, Code2, ArrowUp } from 'lucide-react';
import { footerSocials } from '../data/socialLinks';
import { useTheme } from '../context/ThemeContext';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Connect', href: '#social' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`relative ${isDark ? 'bg-dark-900 border-t border-white/5' : 'bg-gray-50 border-t border-gray-200'}`}>
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className={`font-heading font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Anurag<span className="gradient-text">.</span>
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Full Stack Developer crafting modern digital experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-sm transition-colors ${
                    isDark ? 'text-gray-500 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className={`font-semibold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {footerSocials.map(({ id, url, icon: Icon }) => (
                <motion.a
                  key={id}
                  href={url}
                  target={url.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200
                              ${isDark
                                ? 'bg-dark-700 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400 border border-white/5'
                                : 'bg-white text-gray-500 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                              }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`flex flex-col sm:flex-row items-center justify-between pt-8 border-t gap-4 ${
          isDark ? 'border-white/5' : 'border-gray-200'
        }`}>
          <p className={`text-sm flex items-center gap-1 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            © {year} Anurag Tiwari. Made with{' '}
            <Heart size={13} className="text-red-500 fill-red-500" />{' '}
            &{' '}
            <Code2 size={13} className="text-primary-400" />
          </p>

          <motion.button
            onClick={scrollToTop}
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-colors ${
              isDark
                ? 'text-gray-500 hover:text-primary-400 hover:bg-white/5'
                : 'text-gray-400 hover:text-primary-600 hover:bg-gray-100'
            }`}
            whileHover={{ y: -2 }}
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
