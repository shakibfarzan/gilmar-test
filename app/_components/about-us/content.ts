import type { AboutUsContent } from './about-us.types';

export const aboutUsContent: AboutUsContent = {
  badge: {
    icon: 'Globe',
  },
  title: 'گیلمار؛ آرامش ناب در آغوش طبیعت گیلان',
  description:
    'گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی متفاوت برای سفر تبدیل کرده است.',
  cta: {
    label: 'اقامت در گیلمار',
    href: '/suites',
    icon: 'ArrowLeft',
  },
  gallery: {
    ratio: '600 / 680',
    maxWidth: 600,
    decoration: {
      src: '/about-us/group-about-us.png',
      alt: '',
      width: 508,
      height: 600,
    },
    photos: [
      {
        image: {
          src: '/about-us/img02.png',
          alt: 'نمای اقامتگاه بوم‌گردی گیلمار در غروب آفتاب',
          width: 452,
          height: 455,
        },
        position: { left: '22%', top: '0%', width: '59%', zIndex: 2 },
      },
      {
        image: {
          src: '/about-us/img03.png',
          alt: 'پل چوبی و محوطه سرسبز اقامتگاه گیلمار',
          width: 357,
          height: 401,
        },
        position: { left: '11%', top: '30%', width: '44%', zIndex: 3 },
      },
      {
        image: {
          src: '/about-us/img01.png',
          alt: 'ساختمان چوبی اقامتگاه گیلمار در شب',
          width: 357,
          height: 463,
        },
        position: { left: '47%', top: '35%', width: '44%', zIndex: 1 },
      },
    ],
    highlights: [
      {
        id: 'eco-lodge',
        label: 'اقامتگاه بوم‌گردی گیلمار',
        icon: 'Accommodation',
        position: { left: '8%', top: '19%', zIndex: 4 },
      },
      {
        id: 'authentic-stay',
        label: 'تجربه اقامت اصیل شمال',
        icon: 'MagicStick',
        position: { left: '34%', top: '52%', zIndex: 5 },
      },
    ],
  },
};
