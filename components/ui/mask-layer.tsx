import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { CSSProperties, ReactNode } from 'react';
import type { ImageAsset } from './ui.types';

export interface MaskLayerProps {
  mask: ImageAsset;
  position?: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export default function MaskLayer({ mask, position = 'center', children, sx }: MaskLayerProps) {
  const maskStyle: CSSProperties = {
    WebkitMaskImage: `url(${mask.src})`,
    maskImage: `url(${mask.src})`,
    WebkitMaskSize: 'cover',
    maskSize: 'cover',
    WebkitMaskPosition: position,
    maskPosition: position,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  };

  return (
    <Box
      sx={[{ position: 'absolute', inset: 0 }, ...(Array.isArray(sx) ? sx : [sx])]}
      style={maskStyle}
    >
      {children}
    </Box>
  );
}
