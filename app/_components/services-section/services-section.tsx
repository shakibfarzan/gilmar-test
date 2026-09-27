import { GridBackdrop } from '@/components/ui';
import Box from '@mui/material/Box';
import ServicesCarousel from './services-carousel';
import ServicesIntro from './services-intro';
import type { ServicesSectionProps } from './services-section.types';

export default function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <Box
      component="section"
      aria-labelledby="services-title"
      sx={{
        position: 'relative',
        px: { xs: 2, md: 2.5 },
        py: { xs: 6, md: 10 },
        overflow: 'clip',
      }}
    >
      <GridBackdrop
        sx={{
          insetInlineStart: 0,
          top: '4%',
          width: { xs: '100%', md: '46%' },
          height: '92%',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        sx={{
          position: 'relative',
          maxWidth: 1280,
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 5, md: 8 },
        }}
      >
        <ServicesIntro
          badge={content.badge}
          title={content.title}
          description={content.description}
        />
      </Box>
      <Box
        sx={{
          position: { md: 'absolute', xs: 'static' },
          flex: { md: '1 1 0' },
          bottom: 40,
          right: 0,
          width: { lg: '35%', md: '50%', xs: '100%' },
          minWidth: 0,
          mt: { xs: 4 },
        }}
      >
        <ServicesCarousel items={content.items} />
      </Box>
    </Box>
  );
}
