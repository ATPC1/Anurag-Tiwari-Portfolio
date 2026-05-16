import {
  FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaSnapchatGhost,
  FaTwitter, FaWhatsapp, FaEnvelope, FaFileAlt,
} from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';

// ============================================================
// SOCIAL LINKS DATA
// Replace URLs and contact info with your own
// ============================================================

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    username: '@ATPC1',
    url: 'https://github.com/ATPC1',
    icon: FaGithub,
    color: 'from-gray-700 to-gray-900',
    hoverColor: 'hover:shadow-gray-500/30',
    description: 'Check out my code',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    username: 'anurag-tiwari',
    url: 'https://www.linkedin.com/in/anurag-tiwari-208b712b6',
    icon: FaLinkedin,
    color: 'from-blue-600 to-blue-800',
    hoverColor: 'hover:shadow-blue-500/30',
    description: 'Connect professionally',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    username: '@anuraaggg_001',
    url: 'https://www.instagram.com/anuraaggg_001',
    icon: FaInstagram,
    color: 'from-pink-500 via-red-500 to-yellow-500',
    hoverColor: 'hover:shadow-pink-500/30',
    description: 'Follow my journey',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    username: 'Anurag Tiwari',
    url: 'https://www.facebook.com/share/1S1HeqFkFW/',
    icon: FaFacebook,
    color: 'from-blue-500 to-blue-700',
    hoverColor: 'hover:shadow-blue-500/30',
    description: 'Connect on Facebook',
  },
  {
    id: 'snapchat',
    label: 'Snapchat',
    username: '@anurag010224',
    url: 'https://www.snapchat.com/add/anurag010224',
    icon: FaSnapchatGhost,
    color: 'from-yellow-400 to-yellow-500',
    hoverColor: 'hover:shadow-yellow-400/30',
    description: 'Add me on Snap',
  },
  {
    id: 'hackerrank',
    label: 'HackerRank',
    username: 'ahtiwari0123',
    url: 'https://www.hackerrank.com/profile/ahtiwari0123',
    icon: SiHackerrank,
    color: 'from-green-500 to-green-700',
    hoverColor: 'hover:shadow-green-500/30',
    description: 'Competitive programming',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    username: '@AnuragTiwa48574',
    url: 'https://x.com/AnuragTiwa48574',
    icon: FaTwitter,
    color: 'from-sky-500 to-sky-700',
    hoverColor: 'hover:shadow-sky-500/30',
    description: 'Thoughts & updates',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    username: 'Message Me',
    url: 'https://wa.me/91XXXXXXXXXX', // TODO: Replace XXXXXXXXXX with your number if known
    icon: FaWhatsapp,
    color: 'from-green-400 to-emerald-600',
    hoverColor: 'hover:shadow-green-500/30',
    description: 'Message me directly',
  },
  {
    id: 'email',
    label: 'Email',
    username: 'anuragtiwari0132@gmail.com',
    url: 'mailto:anuragtiwari0132@gmail.com',
    icon: FaEnvelope,
    color: 'from-violet-500 to-purple-700',
    hoverColor: 'hover:shadow-violet-500/30',
    description: 'Drop me a message',
  },
  {
    id: 'resume',
    label: 'Resume',
    username: 'Anurag_Tiwari_CV.pdf',
    url: '/resume.pdf',
    icon: FaFileAlt,
    color: 'from-primary-500 to-primary-700',
    hoverColor: 'hover:shadow-primary-500/30',
    description: 'View & download',
  },
];

// Minimal footer social icons
export const footerSocials = [
  { id: 'github', url: 'https://github.com/ATPC1', icon: FaGithub },
  { id: 'linkedin', url: 'https://www.linkedin.com/in/anurag-tiwari-208b712b6', icon: FaLinkedin },
  { id: 'instagram', url: 'https://www.instagram.com/anuraaggg_001', icon: FaInstagram },
  { id: 'twitter', url: 'https://x.com/AnuragTiwa48574', icon: FaTwitter },
  { id: 'email', url: 'mailto:anuragtiwari0132@gmail.com', icon: FaEnvelope },
];
