// ============================================================
// SKILLS DATA
// Add / remove skills as needed
// ============================================================

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Redux Toolkit', level: 75 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    id: 'data_science',
    title: 'Data Science',
    icon: '📊',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Machine Learning', level: 80 },
      { name: 'Pandas / NumPy', level: 85 },
      { name: 'Data Analysis', level: 80 },
      { name: 'Jupyter', level: 85 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: '🗄️',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Firebase', level: 65 },
      { name: 'SQL Server', level: 70 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 80 },
      { name: 'Vercel / Netlify', level: 80 },
    ],
  },
];

// Other tech badges (shown as pills in About section)
export const techStack = [
  'Python', 'Java', 'Spring Boot', 'Machine Learning', 'Pandas', 'NumPy', 
  'React', 'Node.js', 'MongoDB', 'MySQL', 'JavaScript', 'HTML', 'CSS', 
  'Tailwind', 'Redux', 'REST API', 'Git', 'GitHub',
];
