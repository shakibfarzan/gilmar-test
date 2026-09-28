import type { PackagesContent } from './packages.types';

export const packagesContent: PackagesContent = {
  badge: {
    icon: 'Package',
  },
  title: 'پکیج‌های ویژه اقامت در گیلمار',
  description:
    'پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات هیجان‌انگیز در دل طبیعت است.',
  media: {
    caption: 'تجربه‌ی اقامتی اصیل در دل طبیعت شمال',
    mask: {
      src: '/packages/pattern.png',
      alt: '',
      width: 602,
      height: 815,
    },
    ratio: '602 / 815',
    slides: [
      {
        id: 'autumn-cabin',
        image: {
          src: '/packages/slide1.png',
          alt: 'کلبه چوبی کنار رودخانه در دل جنگل پاییزی',
          width: 613,
          height: 815,
        },
      },
      {
        id: 'forest-suite',
        image: {
          src: '/packages/slide2.png',
          alt: 'اقامتگاه چوبی مدرن در میان درختان سرسبز',
          width: 593,
          height: 815,
        },
      },
      {
        id: 'lakeside-cabin',
        image: {
          src: '/packages/slide3.png',
          alt: 'کلبه جنگلی در کنار دریاچه مه‌آلود',
          width: 602,
          height: 815,
        },
      },
      {
        id: 'forest-trail',
        image: {
          src: '/packages/slide4.png',
          alt: 'پل سنگی و رودخانه در جنگل سرسبز',
          width: 543,
          height: 815,
        },
      },
    ],
  },
  details: {
    name: 'پکیج رمانتیک دو نفره',
    includes: 'شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری',
    features: [
      {
        id: 'stay',
        label: '۱ شب اقامت',
        icon: { src: '/packages/pkg3.png', alt: '', width: 100, height: 100 },
      },
      {
        id: 'breakfast',
        label: 'صبحانه',
        icon: { src: '/packages/pkg2.png', alt: '', width: 100, height: 100 },
      },
      {
        id: 'boating',
        label: 'قایق‌سواری',
        icon: { src: '/packages/pkg1.png', alt: '', width: 100, height: 100 },
      },
      {
        id: 'hiking',
        label: 'تور جنگل‌نوردی',
        icon: { src: '/packages/pkg4.png', alt: '', width: 100, height: 100 },
      },
    ],
    price: 'قیمت: 2300000 تومان',
    cta: {
      label: 'همین حالا رزرو کن',
      href: '/reserve',
      icon: 'ArrowLeft',
    },
  },
};
