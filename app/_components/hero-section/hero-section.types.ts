import type { IconName } from '@/components/icons';

export interface HeroCtaContent {
  label: string;
  href: string;
  icon: IconName;
}

export interface HeroImageContent {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroAvatar {
  src: string;
  alt: string;
}

export interface HeroBadgeContent {
  label: string;
  avatars: HeroAvatar[];
}

export interface HeroContent {
  title: string;
  description: string;
  subtitle: string;
  cta: HeroCtaContent;
  image: HeroImageContent;
  badge: HeroBadgeContent;
}

export interface HeroTitleProps {
  title: string;
}

export interface HeroSectionProps {
  content: HeroContent;
}

export interface HeroDescriptionProps {
  description: string;
}

export interface HeroCtaProps {
  cta: HeroCtaContent;
}

export interface HeroMediaProps {
  image: HeroImageContent;
}

export interface HeroAvatarsProps {
  badge: HeroBadgeContent;
}
