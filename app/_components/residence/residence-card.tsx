import { MediaCard } from '@/components/ui';
import Box from '@mui/material/Box';
import type { ResidenceCardProps } from './residence.types';

export default function ResidenceCard({ item }: ResidenceCardProps) {
  return (
    <Box component="li" sx={{ display: 'flex' }}>
      <MediaCard
        href={item.href}
        image={item.image}
        title={item.title}
        subtitle={item.subtitle}
        sizes="(max-width: 600px) 92vw, (max-width: 900px) 46vw, (max-width: 1200px) 31vw, 300px"
      />
    </Box>
  );
}
