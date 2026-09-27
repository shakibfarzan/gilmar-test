import { Layer } from '@/components/ui';
import Image from 'next/image';
import type { VideoDecorationProps } from './video.types';

export default function VideoDecoration({ image, position }: VideoDecorationProps) {
  return (
    <Layer
      position={position}
      sx={{ transform: 'translate(-50%, -50%)', display: { xs: 'none', md: 'block' } }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        aria-hidden
      />
    </Layer>
  );
}
