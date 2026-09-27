import Typography from '@mui/material/Typography';
import type { HeroDescriptionProps } from './hero-section.types';

export default function HeroDescription({ description }: HeroDescriptionProps) {
  return (
    <Typography
      component="p"
      sx={{
        mt: { xs: 2.5, md: 3 },
        fontSize: { xs: 13, md: 14 },
        fontWeight: 600,
        lineHeight: '32px',
        maxWidth: { xs: '100%', md: 780 },
        px: { xs: 1, md: 0 },
      }}
    >
      {description}
    </Typography>
  );
}
