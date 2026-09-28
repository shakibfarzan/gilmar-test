import { GridBackdrop } from '@/components/ui';
import Box from '@mui/material/Box';
import AboutUsGallery from './about-us-gallery';
import AboutUsIntro from './about-us-intro';
import type { AboutUsSectionProps } from './about-us.types';

export default function AboutUsSection({ content }: AboutUsSectionProps) {
  return (
    <Box
      component="section"
      aria-labelledby="about-us-title"
      sx={{
        position: 'relative',
        px: { xs: 2, md: 2.5 },
        py: { xs: 6, md: 10 },
        overflow: 'clip',
      }}
    >
      <GridBackdrop
        sx={{
          top: 0,
          width: { xs: '100%', md: '52%' },
          height: '100%',
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Box
        sx={{
          position: 'relative',
          maxWidth: 1280,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 6, md: 5 },
        }}
      >
        <AboutUsIntro
          badge={content.badge}
          title={content.title}
          description={content.description}
          cta={content.cta}
        />
        <AboutUsGallery gallery={content.gallery} />
      </Box>
    </Box>
  );
}
