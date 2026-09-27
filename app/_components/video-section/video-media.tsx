import { Icon } from '@/components/icons';
import { Layer, Stage } from '@/components/ui';
import Box from '@mui/material/Box';
import Image from 'next/image';
import type { VideoMediaProps } from './video.types';

export default function VideoMedia({ media }: VideoMediaProps) {
  return (
    <Stage
      ratio={media.ratio}
      sx={{
        flex: { md: '1 1 0' },
        width: '100%',
        borderRadius: { xs: 4, md: 5 },
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      <Image
        src={media.image.src}
        alt={media.image.alt}
        fill
        sizes="(max-width: 900px) 100vw, 55vw"
        style={{
          objectFit: 'cover',
          WebkitMaskImage: `url(${media.mask.src})`,
          maskImage: `url(${media.mask.src})`,
          WebkitMaskSize: 'cover',
          maskSize: 'cover',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />

      <Layer
        position={{ left: '10%', top: '50%' }}
        sx={{
          transform: 'translate(-50%, -50%)',
          bgcolor: 'rgba(255,255,255,0.3)',
          borderRadius: 999,
          p: 2,
        }}
      >
        <Box
          component="button"
          type="button"
          aria-label="پخش ویدیو"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: 64, md: 80 },
            height: { xs: 64, md: 80 },
            border: 0,
            borderRadius: '50%',
            bgcolor: 'background.paper',
            boxShadow: '0 20px 40px -16px rgba(9, 47, 39, 0.45)',
            cursor: 'pointer',
            transition: 'transform 0.25s ease',
            '&:hover': { transform: 'scale(1.06)' },
          }}
        >
          <Icon name="Play" size={25} />
        </Box>
      </Layer>
    </Stage>
  );
}
