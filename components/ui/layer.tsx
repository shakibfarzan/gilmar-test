import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';
import type { LayerPosition } from './ui.types';

export interface LayerProps {
  position: LayerPosition;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export default function Layer({ position, children, sx }: LayerProps) {
  const { top, left, right, bottom, width, zIndex } = position;

  return (
    <Box
      sx={[{ position: 'absolute' }, ...(Array.isArray(sx) ? sx : [sx])]}
      style={{ top, left, right, bottom, width, zIndex }}
    >
      {children}
    </Box>
  );
}
