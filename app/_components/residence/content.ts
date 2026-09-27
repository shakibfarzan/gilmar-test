import type { ResidenceContent } from './residence.types';

export const residenceContent: ResidenceContent = {
  badge: {
    icon: 'Medal',
  },
  title: 'انواع اتاق‌های اقامتگاه گیلمار',
  description:
    'اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل طبیعت آماده شده‌اند.',
  items: [
    {
      id: 'forest-cottage',
      title: 'خانه‌ی چوبی گیلمار',
      subtitle: 'هر شب اقامت از ۱۳۰۰۰۰۰ تومان',
      href: '/suites/forest-cottage',
      image: {
        src: '/residence/package1.png',
        alt: 'خانه‌ی چوبی گیلمار در میان درختان جنگل',
        width: 297,
        height: 396,
      },
    },
    {
      id: 'glass-suite',
      title: 'سوئیت شیشه‌ای جنگل',
      subtitle: 'هر شب اقامت از ۱۸۰۰۰۰۰ تومان',
      href: '/suites/glass-suite',
      image: {
        src: '/residence/package2.png',
        alt: 'سوئیت شیشه‌ای گیلمار با نورپردازی گرم در شب',
        width: 305,
        height: 396,
      },
    },
    {
      id: 'lake-cabin',
      title: 'کلبه‌ی کنار دریاچه',
      subtitle: 'هر شب اقامت از ۲۱۰۰۰۰۰ تومان',
      href: '/suites/lake-cabin',
      image: {
        src: '/residence/package3.png',
        alt: 'کلبه چوبی گیلمار کنار دریاچه در فصل پاییز',
        width: 297,
        height: 396,
      },
    },
    {
      id: 'green-lodge',
      title: 'اقامتگاه سبز آبشار',
      subtitle: 'هر شب اقامت از ۲۵۰۰۰۰۰ تومان',
      href: '/suites/green-lodge',
      image: {
        src: '/residence/package4.png',
        alt: 'مسیر جنگلی و پل سنگی نزدیک اقامتگاه گیلمار',
        width: 303,
        height: 396,
      },
    },
  ],
};
