// ============================================================
// PROJECTS DATA
// Replace project images, links, and descriptions with your own
// ============================================================

export const projects = [
  {
    id: 1,
    title: 'HyperCart — Multi-Vendor E-Commerce',
    description:
      'A full-featured multi-vendor e-commerce platform with real-time inventory, Razorpay payment integration, vendor dashboards, admin panel, and order tracking.',
    image: null, // Replace with project screenshot URL or import
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Razorpay', 'Socket.IO', 'JWT'],
    github: 'https://github.com/ATPC1', // TODO: Add specific repo link
    demo: '#',  // TODO: Add live demo link
    featured: true,
    category: 'fullstack',
  },
  {
    id: 2,
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
    id: 3,
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
  // ============================================================
  // TODO: Add more projects here following the same structure
  // ============================================================
];

export const categories = ['all', 'fullstack', 'frontend', 'backend'];
