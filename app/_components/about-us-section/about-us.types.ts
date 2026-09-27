import type { IconName } from '@/components/icons';
import type { IconTone, ImageAsset, LayerPosition } from '@/components/ui';

export interface AboutUsBadgeContent {
  icon: IconName;
  alt?: string;
}

export interface AboutUsCtaContent {
  label: string;
  href: string;
  icon: IconName;
}

export interface AboutUsPhotoContent {
  image: ImageAsset;
  position: LayerPosition;
}

export interface AboutUsHighlightContent {
  id: string;
  label: string;
  icon: IconName;
  iconTone?: IconTone;
  position: LayerPosition;
}

export interface AboutUsGalleryContent {
  ratio: string;
  maxWidth: number;
  photos: AboutUsPhotoContent[];
  highlights: AboutUsHighlightContent[];
  decoration?: ImageAsset;
}

export interface AboutUsContent {
  badge: AboutUsBadgeContent;
  title: string;
  description: string;
  cta: AboutUsCtaContent;
  gallery: AboutUsGalleryContent;
}

export interface AboutUsSectionProps {
  content: AboutUsContent;
}

export interface AboutUsIntroProps {
  badge: AboutUsBadgeContent;
  title: string;
  description: string;
  cta: AboutUsCtaContent;
}

export interface AboutUsTitleProps {
  title: string;
  id?: string;
}

export interface AboutUsDescriptionProps {
  description: string;
}

export interface AboutUsGalleryProps {
  gallery: AboutUsGalleryContent;
}

export type AboutUsPhotoProps = AboutUsPhotoContent;

export type AboutUsHighlightProps = Omit<AboutUsHighlightContent, 'id'>;

export interface AboutUsDecorationProps {
  decoration: ImageAsset;
}
