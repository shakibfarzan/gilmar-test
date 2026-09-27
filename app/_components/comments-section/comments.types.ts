import type { ImageAsset, LayerPosition, SectionBadge } from '@/components/ui';

export interface CommentItem {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface CommentAvatarPin {
  id: string;
  image: ImageAsset;
  size: number;
  position: LayerPosition;
}

export interface CommentsContent {
  badge: SectionBadge;
  title: string;
  description: string;
  items: CommentItem[];
  avatars: CommentAvatarPin[];
}

export interface CommentsSectionProps {
  content: CommentsContent;
}

export interface CommentsBackdropProps {
  avatars: CommentAvatarPin[];
}

export type CommentsAvatarProps = Omit<CommentAvatarPin, 'id'>;

export interface CommentsCarouselProps {
  items: CommentItem[];
}

export interface CommentsCardProps {
  item: CommentItem;
}

export interface CommentsDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}
