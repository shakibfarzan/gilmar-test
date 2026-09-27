import type { IconName } from '@/components/icons';
import type { ImageAsset, LayerPosition } from '@/components/ui';

export interface VideoBadgeContent {
  icon: IconName;
}

export interface VideoCtaContent {
  label: string;
  href: string;
  icon: IconName;
}

export interface VideoMediaContent {
  image: ImageAsset;
  mask: ImageAsset;
  ratio: string;
}

export interface VideoDecorationContent {
  image: ImageAsset;
  position: LayerPosition;
}

export interface VideoContent {
  badge: VideoBadgeContent;
  title: string;
  description: string;
  cta: VideoCtaContent;
  media: VideoMediaContent;
  decoration: VideoDecorationContent;
}

export interface VideoSectionProps {
  content: VideoContent;
}

export interface VideoIntroProps {
  badge: VideoBadgeContent;
  title: string;
  description: string;
  cta: VideoCtaContent;
}

export interface VideoTitleProps {
  title: string;
  id?: string;
}

export interface VideoDescriptionProps {
  description: string;
}

export interface VideoMediaProps {
  media: VideoMediaContent;
}

export type VideoDecorationProps = VideoDecorationContent;
