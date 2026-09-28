import { MaskLayer } from '@/components/ui';
import Box from '@mui/material/Box';
import Image from 'next/image';
import type { FooterMapProps } from './footer.types';

const MASK_WIDTH = 366;
const IMAGE_WIDTH = 306;

export default function FooterMap({ map }: FooterMapProps) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        insetBlock: 0,
        insetInlineEnd: 0,
        width: MASK_WIDTH,
        display: { xs: 'none', lg: 'block' },
      }}
    >
      <MaskLayer mask={map.mask} position="left center">
        <Box sx={{ position: 'absolute', insetBlock: 0, insetInlineEnd: 0, width: IMAGE_WIDTH }}>
          <Image
            src={map.image.src}
            alt={map.image.alt}
            fill
            sizes={`${IMAGE_WIDTH}px`}
            style={{ objectFit: 'cover', objectPosition: 'right center' }}
          />
        </Box>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0, 0, 0, 0.08)' }} />
      </MaskLayer>
    </Box>
  );
}
