import { Stage } from '@/components/ui';
import AboutUsDecoration from './about-us-decoration';
import AboutUsHighlight from './about-us-highlight';
import AboutUsPhoto from './about-us-photo';
import type { AboutUsGalleryProps } from './about-us.types';

export default function AboutUsGallery({ gallery }: AboutUsGalleryProps) {
  const { ratio, maxWidth, photos, highlights, decoration } = gallery;

  return (
    <Stage
      ratio={ratio}
      maxWidth={maxWidth}
      sx={{ flex: { md: '1 1 0' }, width: '100%', mx: { md: 0 } }}
    >
      {photos.map((photo) => (
        <AboutUsPhoto key={photo.image.src} image={photo.image} position={photo.position} />
      ))}

      {highlights.map((highlight) => (
        <AboutUsHighlight
          key={highlight.id}
          label={highlight.label}
          icon={highlight.icon}
          iconTone={highlight.iconTone}
          position={highlight.position}
        />
      ))}

      {decoration ? <AboutUsDecoration decoration={decoration} /> : null}
    </Stage>
  );
}
