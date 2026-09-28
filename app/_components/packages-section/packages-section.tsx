import { GridBackdrop } from '@/components/ui';
import Box from '@mui/material/Box';
import PackagesCarousel from './packages-carousel';
import PackagesDetails from './packages-details';
import type { PackagesSectionProps } from './packages.types';

export default function PackagesSection({ content }: PackagesSectionProps) {
  return (
    <Box
      component="section"
      aria-labelledby="packages-title"
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
          top: 0,
          width: { xs: '100%', md: '46%' },
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
          gap: { xs: 6, md: 8 },
        }}
      >
        <PackagesDetails
          badge={content.badge}
          title={content.title}
          description={content.description}
          details={content.details}
        />
        <PackagesCarousel media={content.media} />
      </Box>
    </Box>
  );
}
