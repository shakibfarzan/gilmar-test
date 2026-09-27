import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

export interface StageProps {
  /** Ratio of the drawing area, e.g. `'600 / 680'`. */
  ratio: string;
  maxWidth?: number;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export default function Stage({ ratio, maxWidth, children, sx }: StageProps) {
  return (
    <Box
      sx={[
        {
          position: 'relative',
          width: '100%',
          maxWidth,
          mx: 'auto',
          aspectRatio: ratio,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
