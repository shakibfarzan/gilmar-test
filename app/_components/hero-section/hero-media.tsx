import Image from 'next/image';
import type { HeroMediaProps } from './hero-section.types';

export default function HeroMedia({ image }: HeroMediaProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority
      sizes="(max-width: 1440px) 100vw, 1360px"
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        filter: 'drop-shadow(0 20px 40px rgba(15, 23, 42, 0.2))',
      }}
    />
  );
}
