import { MediaCard } from '@/components/ui';
import Box from '@mui/material/Box';
import type { BlogCardProps } from './blogs.types';

export default function BlogCard({ item }: BlogCardProps) {
  return (
    <Box component="li" sx={{ display: 'flex' }}>
      <MediaCard
        href={item.href}
        image={item.image}
        title={item.title}
        subtitle={item.excerpt}
        subtitleLines={2}
        ratio={{ xs: '4 / 5', md: '408 / 482' }}
        sizes="(max-width: 600px) 92vw, (max-width: 900px) 46vw, 410px"
      />
    </Box>
  );
}
