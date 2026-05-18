// ============================================================
// PROJECTS DATA
// Contains all 8 projects (5 Java/Spring Boot & 3 previous ones)
// ============================================================

export const projects = [
  {
    id: 1,
    title: 'AI-Powered Content Generator',
    description:
      'Developed a full-stack AI content generation application allowing users to create structured content from text prompts. Designed backend APIs capable of handling prompt inputs and generating formatted output.',
    image: null,
    tech: ['React', 'Spring Boot', 'Java', 'REST APIs', 'AI Integration'],
    github: 'https://github.com/ATPC1',
    demo: '#',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Real-Time Customer Support Chat',
    description:
      'Built a functional live chat system with instant messaging capabilities. Integrated WebSocket communication to allow real-time updates without page refresh.',
    image: null,
    tech: ['React', 'Spring Boot', 'Java', 'WebSockets', 'STOMP Protocol'],
    github: 'https://github.com/ATPC1',
    demo: '#',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'Secure Digital Asset Marketplace',
    description:
      'Developed a secure backend for product listing, ordering, and role-based data access. Implemented user authentication using Spring Security with Basic Authentication. Ensured data consistency through proper mapping using Hibernate.',
    image: null,
    tech: ['Spring Boot', 'Spring Security', 'Java', 'Hibernate', 'MySQL'],
    github: 'https://github.com/ATPC1',
    demo: '#',
    featured: true,
    category: 'backend',
  },
  {
    id: 4,
    title: 'Medical Appointment Booking System',
    description:
      'Created a backend booking system allowing patients to schedule appointments with doctors. Implemented custom conflict-check logic to prevent double booking of time slots.',
    image: null,
    tech: ['Spring Boot', 'Java', 'MySQL', 'Hibernate', 'REST APIs'],
    github: 'https://github.com/ATPC1',
    demo: '#',
    featured: false,
    category: 'backend',
  },
  {
    id: 5,
    title: 'Personal Finance Dashboard',
    description:
      'Developed a CRUD-based personal finance tracking dashboard for daily expenses and incomes. Created clean REST APIs for transaction management and category-based sorting.',
    image: null,
    tech: ['Spring Boot', 'Java', 'MySQL', 'Hibernate', 'REST APIs'],
    github: 'https://github.com/ATPC1/finance-dashboard-backend',
    demo: '#',
    featured: true,
    category: 'backend',
  },
  {
    id: 6,
    title: 'HyperCart — Multi-Vendor E-Commerce',
    description:
      'A full-featured multi-vendor e-commerce platform with real-time inventory, Razorpay payment integration, vendor dashboards, admin panel, and order tracking.',
    image: null,
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Razorpay', 'Socket.IO', 'JWT'],
    github: 'https://github.com/ATPC1',
    demo: '#',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 7,
    title: 'ASPGYM Project',
    description:
      'A gym management system with member registration, attendance tracking, subscription management, and admin controls.',
    image: null,
    tech: ['React', 'Node.js', 'MySQL', 'Express', 'JWT'],
    github: 'https://github.com/ATPC1',
    demo: '#',
    featured: false,
    category: 'fullstack',
  },
  {
    id: 8,
    title: 'Personal Portfolio Website',
    description:
      'A modern, animated portfolio website built with React, Tailwind CSS, and Framer Motion. Features dark/light mode, particle animations, and smooth scroll.',
    image: null,
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/ATPC1',
    demo: '#',
    featured: true,
    category: 'frontend',
  },
];

export const categories = ['all', 'fullstack', 'frontend', 'backend'];
