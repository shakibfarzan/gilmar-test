import type { HeroContent } from './hero-section.types';

export const heroContent: HeroContent = {
  title: 'اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است',
  description:
    'اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.',
  cta: {
    label: 'مهمان گیلمار شو',
    href: '/suites',
    icon: 'ArrowLeft',
  },
  image: {
    src: '/hero.png',
    alt: 'اقامتگاه بوم‌گردی گیلمار',
    width: 2560,
    height: 1162,
  },
  subtitle: 'فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال',
  badge: {
    label: '+120 رزرو موفق',
    avatars: [
      { src: '/avatars/avatar-1.png', alt: '' },
      { src: '/avatars/avatar-2.png', alt: '' },
      { src: '/avatars/avatar-3.png', alt: '' },
      { src: '/avatars/avatar-4.png', alt: '' },
    ],
  },
};
