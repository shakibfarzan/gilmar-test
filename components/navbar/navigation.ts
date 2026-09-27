import type { NavbarContent } from './navbar.types';

export const navbarContent: NavbarContent = {
  logo: {
    src: '/banner.png',
    alt: 'Gilmar Ecological Resort',
    width: 145,
    height: 46,
  },
  links: [
    { label: 'خانه', href: '/' },
    { label: 'سوئیت ها و اقامت', href: '/suites' },
    { label: 'درباره گیلان', href: '/about-gilan' },
    { label: 'راهنمای مهمان ها', href: '/guest-guide' },
    { label: 'مجله گیلان', href: '/gilan-magazine' },
    { label: 'تماس با ما', href: '/contact' },
  ],
  cta: {
    label: 'ورود و ثبت‌نام',
    href: '/auth',
    icon: 'User',
  },
};
