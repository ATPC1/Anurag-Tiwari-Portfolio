import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, ExternalLink, ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { socialLinks } from '../data/socialLinks';

// ============================================================
// HERO SECTION
// TODO: Replace avatarInitials with your photo:
//   import profilePhoto from '../assets/profile.jpg';
//   Then use <img src={profilePhoto} .../> instead of the initials div
// ============================================================

export default function Hero() {
  const { isDark } = useTheme();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-dark-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50'
      }`}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb w-96 h-96 bg-primary-500"
          style={{ top: '-5%', left: '-5%' }}
        />
        <div
          className="orb w-80 h-80 bg-violet-500"
          style={{ bottom: '10%', right: '5%', animationDelay: '2s' }}
        />
        <div
          className="orb w-64 h-64 bg-cyan-500"
          style={{ top: '50%', left: '50%', animationDelay: '4s' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6
                         bg-primary-500/10 border border-primary-500/20 text-primary-400"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
              <span className="gradient-text">Anurag</span>
              <br />
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Tiwari</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              className="text-xl md:text-2xl font-medium mb-6 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                I'm a{' '}
              </span>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'MERN Stack Engineer', 2000,
                  'Software Developer', 2000,
                  'B.Sc. IT Student', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text font-semibold"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className={`text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              A passionate Full Stack Developer who loves building scalable web applications and
              elegant user experiences. I specialize in the MERN stack and enjoy turning complex
              problems into simple, beautiful solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-base px-7 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Contact Me
              </motion.button>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-7 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Resume
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('projects')}
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-base
                            transition-all duration-300 hover:scale-105
                            ${isDark ? 'text-gray-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5'
                                     : 'text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                View Projects
              </motion.button>
            </motion.div>

            {/* Social Icons Row (New) */}
            <motion.div
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.filter(link => ['github', 'linkedin', 'instagram', 'facebook', 'snapchat', 'twitter'].includes(link.id)).map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200
                                ${isDark 
                                  ? 'bg-white/5 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400 border border-white/5' 
                                  : 'bg-gray-100 text-gray-500 hover:bg-white hover:text-primary-600 border border-gray-200 shadow-sm'}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { value: '10+', label: 'Projects Built' },
                { value: '2+', label: 'Years Coding' },
                { value: '∞', label: 'Lines of Code' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text font-heading">{stat.value}</div>
                  <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Avatar */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            {/* Spinning ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30"
              style={{ inset: '-20px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-violet-500/20"
              style={{ inset: '-40px' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Avatar Container */}
            <div className="animate-float relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full glow-ring overflow-hidden
                              bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center
                              text-white text-7xl md:text-8xl font-bold font-heading select-none">
                {/* ============================================================ */}
                {/* TODO: Replace this div with your actual photo:               */}
                {/* <img src={profilePhoto} alt="Anurag Tiwari"                  */}
                {/*      className="w-full h-full object-cover" />               */}
                {/* ============================================================ */}
                AT
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-primary-500
                           text-white text-xs font-mono font-semibold px-3 py-1.5 rounded-full shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                &lt;Developer/&gt;
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-violet-500 to-pink-500
                           text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                🚀 Open to Work
              </motion.div>
            </div>

            {/* Tech pill icons around avatar */}
            {['React', 'Node', 'Mongo', 'JS'].map((tech, i) => {
              const positions = [
                { top: '10%', right: '-15%' },
                { bottom: '20%', right: '-18%' },
                { top: '25%', left: '-15%' },
                { bottom: '10%', left: '-12%' },
              ];
              return (
                <motion.div
                  key={tech}
                  className={`absolute text-xs font-mono font-semibold px-2 py-1 rounded-lg
                              ${isDark ? 'bg-dark-700 border border-white/10 text-gray-300'
                                       : 'bg-white border border-gray-200 text-gray-700 shadow-md'}`}
                  style={positions[i]}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.5 }}
                >
                  {tech}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollToSection('about')}
        >
          <span className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} className="text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
