import type { CommentsContent } from './comments.types';

const AVATAR_1 = { src: '/avatars/avatar-1.png', alt: '', width: 100, height: 100 };
const AVATAR_2 = { src: '/avatars/avatar-2.png', alt: '', width: 100, height: 100 };
const AVATAR_3 = { src: '/avatars/avatar-3.png', alt: '', width: 100, height: 100 };
const AVATAR_4 = { src: '/avatars/avatar-4.png', alt: '', width: 100, height: 100 };

export const commentsContent: CommentsContent = {
  badge: {
    icon: 'Message',
  },
  title: 'گیلمار از نگاه مهمانان',
  description: 'تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت بکر و حال خوب گیلمار است.',
  items: [
    {
      id: 'ehsan-abdipour',
      quote:
        'اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.',
      name: 'احسان عبدی پور',
      role: 'مهمان',
    },
    {
      id: 'sara-karimi',
      quote:
        'چیزی که گیلمار رو خاص می‌کنه نزدیکی به طبیعت و سکوت دلنشین اطرافشه. اتاق‌ها تمیز و دنج بودن و کارکنان با احترام و مهربانی همراهیمون کردن. حتماً دوباره برمی‌گردم.',
      name: 'سارا کریمی',
      role: 'مهمان',
    },
    {
      id: 'reza-hosseini',
      quote:
        'صبحونه‌ی محلی و منظره‌ی دریاچه از پنجره اتاق، لحظاتی بود که هیچوقت فراموش نمی‌کنم. برای فرار از شلوغی شهر و یه اقامت آروم، گیلمار انتخاب فوق‌العاده‌ایه.',
      name: 'رضا حسینی',
      role: 'مهمان',
    },
    {
      id: 'niloofar-ahmadi',
      quote:
        'با خانواده به گیلمار سفر کردیم و فضای امن و آرومش برای بچه‌ها هم عالی بود. مسیرهای پیاده‌روی در طبیعت و سکوت شب از بهترین بخش‌های این اقامت بود.',
      name: 'نیلوفر احمدی',
      role: 'مهمان',
    },
    {
      id: 'ehsan-abdipour-2',
      quote:
        'اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.',
      name: 'احسان عبدی پور',
      role: 'مهمان',
    },
  ],
  avatars: [
    { id: 'pin-1', image: AVATAR_3, size: 60, position: { left: '10%', top: '32%' } },
    { id: 'pin-2', image: AVATAR_1, size: 88, position: { right: '50%', top: '13%' } },
    { id: 'pin-3', image: AVATAR_2, size: 60, position: { left: '76%', top: '42%' } },
    { id: 'pin-4', image: AVATAR_4, size: 52, position: { left: '86%', top: '58%' } },
    { id: 'pin-5', image: AVATAR_1, size: 48, position: { left: '23%', top: '54%' } },
    { id: 'pin-6', image: AVATAR_3, size: 60, position: { left: '13%', top: '68%' } },
    { id: 'pin-7', image: AVATAR_2, size: 60, position: { left: '25%', top: '87%' } },
    { id: 'pin-8', image: AVATAR_4, size: 60, position: { left: '80%', top: '80%' } },
  ],
};
