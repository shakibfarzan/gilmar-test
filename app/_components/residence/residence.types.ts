import type { ImageAsset, SectionBadge } from '@/components/ui';

export interface ResidenceItem {
  id: string;
  title: string;
  /** Price line shown under the title, e.g. `'هر شب اقامت از ۱۳۰۰۰۰۰ تومان'`. */
  subtitle: string;
  href: string;
  image: ImageAsset;
}

export interface ResidenceContent {
  badge: SectionBadge;
  title: string;
  description: string;
  items: ResidenceItem[];
}

export interface ResidenceSectionProps {
  content: ResidenceContent;
}

export interface ResidenceHeaderProps {
  badge: SectionBadge;
  title: string;
  description: string;
}

export interface ResidenceCardsProps {
  items: ResidenceItem[];
}

export interface ResidenceCardProps {
  item: ResidenceItem;
}
