import { Icon, type IconName } from '@/components/icons';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { CSSProperties } from 'react';
import type { IconTone } from './ui.types';

export type IconCircleVariant = 'gradient' | 'paper' | 'soft';

export interface IconCircleProps {
  name: IconName;
  size?: number;
  iconSize?: number;
  variant?: IconCircleVariant;
  tone?: IconTone;
  alt?: string;
  sx?: SxProps<Theme>;
}

export const ICON_CIRCLE_GRADIENT =
  'linear-gradient(203deg, var(--mui-palette-secondary-main) -10%, var(--mui-palette-primary-main) 120%)';

const variantSx: Record<IconCircleVariant, SxProps<Theme>> = {
  gradient: {
    backgroundImage: ICON_CIRCLE_GRADIENT,
    boxShadow: '0 10px 20px -12px rgba(18, 192, 130, 0.9)',
  },
  paper: {
    bgcolor: 'background.paper',
  },
  soft: {
    bgcolor: 'rgba(38, 224, 90, 0.12)',
  },
};

const toneStyle: Record<IconTone, CSSProperties | undefined> = {
  original: undefined,
  light: { filter: 'brightness(0) invert(1)' },
};

export default function IconCircle({
  name,
  size = 48,
  iconSize,
  variant = 'gradient',
  tone = 'original',
  alt = '',
  sx,
}: IconCircleProps) {
  return (
    <Box
      aria-hidden={alt ? undefined : true}
      sx={[
        {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          width: size,
          height: size,
          borderRadius: '50%',
        },
        variantSx[variant],
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Icon
        name={name}
        size={iconSize ?? Math.round(size * 0.46)}
        alt={alt}
        style={toneStyle[tone]}
      />
    </Box>
  );
}
