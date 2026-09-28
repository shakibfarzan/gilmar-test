import type { ImageAsset, SectionBadge } from '@/components/ui';

export interface BlogItem {
  id: string;
  title: string;
  /** Short excerpt shown under the title. */
  excerpt: string;
  href: string;
  image: ImageAsset;
}

export interface BlogsContent {
  badge: SectionBadge;
  title: string;
  description: string;
  items: BlogItem[];
}

export interface BlogsSectionProps {
  content: BlogsContent;
}

export interface BlogsHeaderProps {
  badge: SectionBadge;
  title: string;
  description: string;
}

export interface BlogCardsProps {
  items: BlogItem[];
}

export interface BlogCardProps {
  item: BlogItem;
}
