import { Layer } from '@/components/ui';
import Image from 'next/image';
import type { CommentsAvatarProps } from './comments.types';

export default function CommentsAvatar({ image, size, position }: CommentsAvatarProps) {
  return (
    <Layer position={position} sx={{ transform: 'translate(-50%, -50%)' }}>
      <Image
        src={image.src}
        alt={image.alt}
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: '0 12px 24px -10px rgba(9, 47, 39, 0.35)',
        }}
      />
    </Layer>
  );
}
