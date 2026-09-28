import type { BlogsContent } from './blogs.types';

const BLOG_COVER = {
  src: '/blogs/blog.png',
  alt: 'نمای اقامتگاه بوم‌گردی گیلمار در غروب آفتاب',
  width: 1537,
  height: 1023,
};

export const blogsContent: BlogsContent = {
  badge: {
    icon: 'Essay',
  },
  title: 'مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش',
  description:
    'در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه اقامتی دلنشین را دنبال کنید.',
  items: [
    {
      id: 'north-nature-experiences',
      title: '۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید',
      excerpt:
        'از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت شمال همراه شوید.',
      href: '/gilan-magazine/north-nature-experiences',
      image: BLOG_COVER,
    },
    {
      id: 'autumn-trip-to-gilan',
      title: 'راهنمای کامل سفر پاییزی به دل جنگل‌های گیلان',
      excerpt:
        'بهترین مسیرها، غذاهای محلی و نکته‌هایی که سفر پاییزی شما به گیلان را دلچسب‌تر و به‌یادماندنی‌تر می‌کند.',
      href: '/gilan-magazine/autumn-trip-to-gilan',
      image: BLOG_COVER,
    },
    {
      id: 'a-day-in-gilmar',
      title: 'یک روز کامل در اقامتگاه بوم‌گردی گیلمار',
      excerpt:
        'از صبحانه محلی تا شب‌نشینی کنار آتش؛ روایتی از یک روز آرام در دل طبیعت و معماری چوبی گیلمار.',
      href: '/gilan-magazine/a-day-in-gilmar',
      image: BLOG_COVER,
    },
  ],
};
