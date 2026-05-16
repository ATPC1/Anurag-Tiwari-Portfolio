import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1 ${
        isDark
          ? 'bg-primary-600 focus:ring-offset-dark-900'
          : 'bg-gray-200 focus:ring-offset-white'
      }`}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className={`absolute top-0.5 w-5 h-5 rounded-full shadow-md flex items-center justify-center ${
          isDark ? 'bg-white' : 'bg-white'
        }`}
        animate={{ x: isDark ? 26 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <motion.div
          animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark
            ? <Moon size={10} className="text-primary-600" />
            : <Sun size={10} className="text-amber-500" />
          }
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
