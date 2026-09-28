import type { IconName } from '@/components/icons';
import type { ImageAsset } from '@/components/ui';

export interface PackagesBadgeContent {
  icon: IconName;
}

export interface PackagesCtaContent {
  label: string;
  href: string;
  icon: IconName;
}

export interface PackageSlide {
  id: string;
  image: ImageAsset;
}

export interface PackagesMediaContent {
  caption: string;
  mask: ImageAsset;
  ratio: string;
  slides: PackageSlide[];
}

export interface PackageFeature {
  id: string;
  label: string;
  icon: ImageAsset;
}

export interface PackageDetailsContent {
  name: string;
  includes: string;
  features: PackageFeature[];
  price: string;
  cta: PackagesCtaContent;
}

export interface PackagesContent {
  badge: PackagesBadgeContent;
  title: string;
  description: string;
  media: PackagesMediaContent;
  details: PackageDetailsContent;
}

export interface PackagesSectionProps {
  content: PackagesContent;
}

export interface PackagesDetailsProps {
  badge: PackagesBadgeContent;
  title: string;
  description: string;
  details: PackageDetailsContent;
}

export interface PackagesFeatureCardProps {
  feature: PackageFeature;
}

export interface PackagesCarouselProps {
  media: PackagesMediaContent;
}

export interface PackagesSlideProps {
  slide: PackageSlide;
  mask: ImageAsset;
  ratio: string;
}

export interface PackagesCaptionProps {
  caption: string;
}

export interface PackagesDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}
