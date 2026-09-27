import { Layer } from '@/components/ui';
import Image from 'next/image';
import type { AboutUsPhotoProps } from './about-us.types';

export default function AboutUsPhoto({ image, position }: AboutUsPhotoProps) {
  return (
    <Layer position={position}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 900px) 60vw, 360px"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          filter: 'drop-shadow(0 24px 40px rgba(9, 47, 39, 0.22))',
        }}
      />
    </Layer>
  );
}
