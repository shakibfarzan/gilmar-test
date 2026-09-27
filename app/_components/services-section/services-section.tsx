import Box from '@mui/material/Box';
import ServicesCarousel from './services-carousel';
import type { ServicesSectionProps } from './services-section.types';

export default function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 4 },
        pt: { xs: 5, md: 6 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{ position: 'relative', width: '100%', maxWidth: { xs: '100%', md: 1360 }, mx: 'auto' }}
      >
        <ServicesCarousel items={content.items} />
      </Box>
    </Box>
  );
}
