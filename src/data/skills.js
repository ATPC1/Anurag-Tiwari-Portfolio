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
      { name: 'Node.js', level: 80 },
      { name: '.NET Framework', level: 75 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'JWT Auth', level: 75 },
    ],
  },
  {
    id: 'desktop_web',
    title: '.NET & Desktop',
    icon: '💻',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'ASP.NET WebForms', level: 80 },
      { name: 'Windows Forms (WinForms)', level: 85 },
      { name: 'C# / .NET', level: 80 },
      { name: 'Socket.IO', level: 65 },
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
  'React', 'Node.js', '.NET Framework', 'WebForms', 'WinForms', 'C#', 
  'MongoDB', 'MySQL', 'SQL Server', 'JavaScript', 'HTML', 'CSS', 
  'Tailwind', 'Redux', 'JWT', 'REST API', 'Git', 'GitHub',
];
