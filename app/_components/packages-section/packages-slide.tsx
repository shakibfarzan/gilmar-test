import { Stage } from '@/components/ui';
import Image from 'next/image';
import type { PackagesSlideProps } from './packages.types';

export default function PackagesSlide({ slide, mask, ratio }: PackagesSlideProps) {
  return (
    <Stage
      ratio={ratio}
      sx={{
        flex: '0 0 100%',
        width: '100%',
        scrollSnapAlign: 'start',
        bgcolor: 'background.default',
      }}
    >
      <Image
        src={slide.image.src}
        alt={slide.image.alt}
        fill
        sizes="(max-width: 900px) 100vw, 47vw"
        draggable={false}
        style={{
          objectFit: 'cover',
          WebkitMaskImage: `url(${mask.src})`,
          maskImage: `url(${mask.src})`,
          WebkitMaskSize: 'cover',
          maskSize: 'cover',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />
    </Stage>
  );
}
