import { Layer } from '@/components/ui';
import Typography from '@mui/material/Typography';
import type { PackagesCaptionProps } from './packages.types';

export default function PackagesCaption({ caption }: PackagesCaptionProps) {
  return (
    <Layer
      position={{ left: '0%', top: '8%', width: '24%', zIndex: 1 }}
      sx={{ pointerEvents: 'none' }}
    >
      <Typography
        component="p"
        sx={{
          px: { xs: 0.5, md: 1 },
          py: { xs: 1, md: 2 },
          textAlign: 'center',
          fontSize: { xs: 11, md: 14 },
          fontWeight: 600,
          lineHeight: { xs: '20px', md: '32px' },
          color: 'text.primary',
        }}
      >
        {caption}
      </Typography>
    </Layer>
  );
}
