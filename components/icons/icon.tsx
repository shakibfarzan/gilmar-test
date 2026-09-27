import Image from 'next/image';
import type { CSSProperties } from 'react';
import { getFileIcon, getInlineIcon, type IconName } from './registry';

export interface IconProps {
  name: IconName;
  size?: number;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

const baseStyle: CSSProperties = { display: 'inline-block', verticalAlign: 'middle' };

const heightFromViewBox = (viewBox: string, size: number): number => {
  const [, , width, height] = viewBox.split(/\s+/).map(Number);
  return Math.round(size * (height / width)) || size;
};

export default function Icon({ name, size = 20, alt = '', className, style }: IconProps) {
  const fileIcon = getFileIcon(name);
  const iconStyle = { ...baseStyle, ...style };

  if (fileIcon) {
    return (
      <Image
        src={fileIcon.src}
        width={size}
        height={Math.round((size * fileIcon.height) / fileIcon.width)}
        alt={alt}
        className={className}
        style={iconStyle}
        unoptimized={fileIcon.src.endsWith('.svg')}
      />
    );
  }

  const inlineIcon = getInlineIcon(name);
  if (!inlineIcon) return null;

  return (
    <svg
      width={size}
      height={heightFromViewBox(inlineIcon.viewBox, size)}
      viewBox={inlineIcon.viewBox}
      fill="currentColor"
      className={className}
      style={iconStyle}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      focusable="false"
    >
      {inlineIcon.paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
