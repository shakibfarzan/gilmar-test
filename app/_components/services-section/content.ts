import type { ServicesContent } from './services-section.types';

export const servicesContent: ServicesContent = {
  items: [
    {
      id: 'birdwatching',
      title: 'پرنده نگری',
      href: '/services/birdwatching',
      image: { src: '/services/photography.png', alt: 'پرنده نگری', width: 289, height: 346 },
    },
    {
      id: 'boating',
      title: 'قایق سواری',
      href: '/services/boating',
      image: { src: '/services/boat.png', alt: 'قایق سواری', width: 288, height: 346 },
    },
    {
      id: 'biking',
      title: 'دوچرخه سواری',
      href: '/services/biking',
      image: { src: '/services/bicycle.png', alt: 'دوچرخه سواری', width: 266, height: 346 },
    },
  ],
};
