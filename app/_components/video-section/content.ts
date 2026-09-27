import type { VideoContent } from './video.types';

export const videoContent: VideoContent = {
  badge: {
    icon: 'Video',
  },
  title: 'تور ویدیویی اقامتگاه گیلمار',
  description:
    'در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال و هوای دلنشین آن را تجربه کنید.',
  cta: {
    label: 'اقامت در گیلمار',
    href: '/suites',
    icon: 'ArrowLeft',
  },
  media: {
    image: {
      src: '/video/nature.png',
      alt: 'مسیر جنگلی سرسبز اقامتگاه گیلمار',
      width: 1440,
      height: 690,
    },
    mask: {
      src: '/video/map.png',
      alt: '',
      width: 914,
      height: 690,
    },
    ratio: '914 / 690',
  },
  decoration: {
    image: {
      src: '/video/shape.png',
      alt: '',
      width: 174,
      height: 177,
    },
    position: { left: '54%', top: '92%', width: '110px', zIndex: 2 },
  },
};
