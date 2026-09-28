import { IconName } from '../icons';

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type IconTone = 'original' | 'light';

export interface LayerPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  zIndex?: number;
}

export type SectionAlign = 'center' | 'start';

export interface SectionBadge {
  icon: IconName;
  alt?: string;
}

export interface SectionCta {
  label: string;
  href: string;
  icon?: IconName;
}

export type ResponsiveColumns = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>>;
export type ResponsiveRatio = string | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>>;
