// Shared profile data for the projects site (projects.adityajain.me).
// The main portfolio lives at https://adityajain.me — this is its companion
// "all projects" showcase, reusing the same design system.
export const profile = {
  name: 'Aditya Jain',
  role: 'MTS Software Engineer @ Salesforce',
  tagline: 'Projects · ML / AI Engineer',
  email: 'adityajn105@gmail.com',
  location: 'Sunnyvale, CA',
  // Résumé lives on the main portfolio.
  resume: 'https://adityajain.me/files/Aditya_Jain_resume.pdf',
  bio: [
    'A collection of the things I have built over the years — machine learning, deep learning, reinforcement learning, computer vision, NLP, and a few fun terminal games.',
  ],
  socials: [
    { name: 'GitHub', href: 'https://github.com/adityajn105', icon: 'github' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/adityajn105', icon: 'linkedin' },
    { name: 'Docker Hub', href: 'https://hub.docker.com/u/adityajn105', icon: 'docker' },
    { name: 'Twitter', href: 'https://twitter.com/adityajn105', icon: 'twitter' },
    { name: 'Instagram', href: 'https://www.instagram.com/adityajn105/', icon: 'instagram' },
  ],
  formspree: 'https://formspree.io/f/mainquiry',
} as const;

export const nav = [
  { label: 'Portfolio', href: 'https://adityajain.me' },
  { label: 'Blog', href: 'https://adityajain.me/#blog' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
