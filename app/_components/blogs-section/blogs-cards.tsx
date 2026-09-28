import { CardGrid } from '@/components/ui';
import BlogCard from './blog-card';
import type { BlogCardsProps } from './blogs.types';

export default function BlogCards({ items }: BlogCardsProps) {
  return (
    <CardGrid columns={{ xs: 1, sm: 2, lg: 3 }} sx={{ mt: { xs: 4, md: 6 } }}>
      {items.map((item) => (
        <BlogCard key={item.id} item={item} />
      ))}
    </CardGrid>
  );
}
