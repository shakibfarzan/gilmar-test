import type { RulesContent } from './rules.types';

export const rulesContent: RulesContent = {
  badge: {
    icon: 'Lightening',
  },
  title: 'همراهی برای حفظ آرامش و طبیعت گیلمار',
  description:
    'برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید.',
  cards: [
    {
      id: 'equipment-care',
      title: 'مراقبت از وسایل اقامتگاه',
      description:
        'مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند.',
      image: {
        src: '/rules/camp.png',
        alt: 'چادر و وسایل اقامتگاه',
        width: 200,
        height: 200,
      },
      offset: 16,
      rotationDegree: -15,
    },
    {
      id: 'quiet-stay',
      title: 'حفظ آرامش اقامتگاه',
      description:
        'برای حفظ فضای آرام و دلنشین گیلمار لطفاً از ایجاد سروصدای زیاد به‌ویژه در ساعات شب خودداری کنید.',
      image: {
        src: '/rules/icon-binoculars.png',
        alt: 'دوربین شکاری و عکس‌های طبیعت',
        width: 200,
        height: 200,
      },
      offset: 0,
      rotationDegree: 15,
    },
    {
      id: 'nature-care',
      title: 'حفظ طبیعت و محیط زیست',
      description:
        'گیلمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه ما باشید.',
      image: {
        src: '/rules/icon-van.png',
        alt: 'ون سفر و نقشه گردشگری',
        width: 200,
        height: 200,
      },
      offset: 16,
      rotationDegree: -15,
    },
  ],
  confetti: [
    { id: 'c1', color: '#F7C948', size: 10, rotate: 18, position: { right: '28%', top: '8%' } },
    { id: 'c2', color: '#9B8CFF', size: 12, rotate: -12, position: { right: '16%', top: '22%' } },
    { id: 'c3', color: '#FF9AA6', size: 12, rotate: 24, position: { right: '40%', top: '34%' } },
    { id: 'c4', color: '#5B8DEF', size: 9, rotate: -20, position: { right: '33%', top: '18%' } },
    { id: 'c5', color: '#7FD1FF', size: 8, rotate: 14, position: { left: '31%', top: '55%' } },
    { id: 'c6', color: '#B8A6FF', size: 13, rotate: -18, position: { left: '15%', top: '70%' } },
    { id: 'c7', color: '#9B8CFF', size: 11, rotate: 30, position: { left: '11%', top: '24%' } },
    { id: 'c8', color: '#F7C948', size: 8, rotate: -8, position: { left: '9%', top: '62%' } },
  ],
};
