import type { ServicesContent } from './services-section.types';

export const servicesContent: ServicesContent = {
  badge: {
    icon: 'MagicStick2',
  },
  title: 'خدمات رفاهی گیلمار برای اقامتی دلنشین',
  description:
    'در گیلمار، آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛ فضایی دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و به‌یادماندنی آماده شده است.',
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
