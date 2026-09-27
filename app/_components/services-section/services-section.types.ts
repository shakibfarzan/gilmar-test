import type { IconName } from '@/components/icons';
import type { ImageAsset } from '@/components/ui';

export interface ServicesBadgeContent {
  icon: IconName;
  alt?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  href: string;
  image: ImageAsset;
}

export interface ServicesContent {
  badge: ServicesBadgeContent;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface ServicesIntroProps {
  badge: ServicesBadgeContent;
  title: string;
  description: string;
}

export interface ServicesTitleProps {
  title: string;
  id?: string;
}

export interface ServicesDescriptionProps {
  description: string;
}

export interface ServicesSectionProps {
  content: ServicesContent;
}

export interface ServicesCarouselProps {
  items: ServiceItem[];
}

export interface ServiceCardProps {
  item: ServiceItem;
  active?: boolean;
}
