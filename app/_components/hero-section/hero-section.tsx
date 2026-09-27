import Box from '@mui/material/Box';
import HeroAvatars from './hero-avatars';
import HeroCta from './hero-cta';
import HeroDescription from './hero-description';
import HeroMedia from './hero-media';
import type { HeroSectionProps } from './hero-section.types';
import HeroSubtitle from './hero-subtitle';
import HeroTitle from './hero-title';

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
        pt: { xs: 4, md: 4 },
        pb: { xs: 5, md: 8 },
      }}
    >
      <HeroTitle title={content.title} />
      <HeroDescription description={content.description} />
      <HeroCta cta={content.cta} />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: { xs: '100%', md: 1360 },
          mt: { xs: 5, md: 6 },
        }}
      >
        <HeroMedia image={content.image} />
        <HeroAvatars badge={content.badge} />
        <HeroSubtitle title={content.subtitle} />
      </Box>
    </Box>
  );
}
