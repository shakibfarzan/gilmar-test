import type { FooterContent } from './footer.types';

export const footerContent: FooterContent = {
  brand: {
    logo: {
      src: '/banner.png',
      alt: 'اقامتگاه بوم‌گردی گیلمار',
      width: 168,
      height: 53,
    },
    description:
      'اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی میراث فرهنگی گیلان فعالیت می‌کند.',
  },
  map: {
    image: {
      src: '/footer/map-image.png',
      alt: '',
      width: 728,
      height: 552,
    },
    mask: {
      src: '/video/map.png',
      alt: '',
      width: 914,
      height: 690,
    },
  },
  explore: {
    title: 'کاوش در گیلمار',
    links: [
      { label: 'سوئیت‌ها و اقامت', href: '/suites' },
      { label: 'راهنمای مهمان‌ها', href: '/guest-guide' },
      { label: 'درباره گیلمار', href: '/about-us' },
      { label: 'مجله گیلمار', href: '/gilan-magazine' },
    ],
  },
  contact: {
    title: 'راه‌های ارتباط با گیلمار',
    items: [
      {
        id: 'phone',
        label: 'تلفن پشتیبانی',
        value: '01334775400 - 01334775411',
      },
      {
        id: 'email',
        label: 'ایمیل',
        value: 'Info@Gilmar-Gilan.Com',
        href: 'mailto:Info@Gilmar-Gilan.Com',
      },
      {
        id: 'address',
        label: 'موقعیت گیلمار',
        value: 'گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان کوزه‌گران، اقامتگاه گیلمار',
      },
    ],
  },
  socials: [
    { id: 'x', label: 'ایکس', href: 'https://x.com/gilmargilan', icon: 'X' },
    { id: 'youtube', label: 'یوتیوب', href: 'https://youtube.com/@gilmargilan', icon: 'YT' },
    { id: 'telegram', label: 'تلگرام', href: 'https://t.me/gilmargilan', icon: 'Telegram' },
    {
      id: 'linkedin',
      label: 'لینکدین',
      href: 'https://linkedin.com/company/gilmargilan',
      icon: 'LinkedIn',
    },
  ],
  copyright: '© تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.',
};
