import { Typography } from '@mui/material';
import { HeroTitleProps } from './hero-section.types';

export default function HeroSubtitle({ title }: HeroTitleProps) {
  return (
    <Typography
      component="p"
      sx={{
        mt: { xs: 2.5, md: 3 },
        fontSize: { xs: 13, md: 14 },
        fontWeight: 600,
        lineHeight: '32px',
        maxWidth: { xs: '100%', md: 250 },
        position: { lg: 'absolute', md: 'static' },
        left: 20,
        bottom: 26,
        textAlign: 'start',
      }}
    >
      {title}
    </Typography>
  );
}
