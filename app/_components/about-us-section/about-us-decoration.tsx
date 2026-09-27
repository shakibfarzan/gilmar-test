import Box from '@mui/material/Box';
import Image from 'next/image';
import type { AboutUsDecorationProps } from './about-us.types';

export default function AboutUsDecoration({ decoration }: AboutUsDecorationProps) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 6,
        pointerEvents: 'none',
      }}
    >
      <Image
        src={decoration.src}
        alt={decoration.alt}
        fill
        sizes="(max-width: 900px) 90vw, 600px"
        style={{ objectFit: 'fill' }}
      />
    </Box>
  );
}
