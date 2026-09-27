import Typography from '@mui/material/Typography';
import type { HeroTitleProps } from './hero-section.types';

export default function HeroTitle({ title }: HeroTitleProps) {
  return (
    <Typography
      component="h1"
      sx={{
        fontWeight: 800,
        fontSize: { xs: 26, sm: 34, md: 40 },
        lineHeight: '100%',
        maxWidth: { xs: '100%', md: 1000 },
        px: { xs: 1, md: 0 },
      }}
    >
      {title}
    </Typography>
  );
}
