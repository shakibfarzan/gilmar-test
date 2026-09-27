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
