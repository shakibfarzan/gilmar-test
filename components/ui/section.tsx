import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  labelledBy?: string;
  maxWidth?: number;
  children: ReactNode;
  sx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
}

export default function Section({
  id,
  labelledBy,
  maxWidth = 1280,
  children,
  sx,
  containerSx,
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={labelledBy}
      sx={[
        {
          position: 'relative',
          px: { xs: 2, md: 2.5 },
          py: { xs: 6, md: 10 },
          overflow: 'clip',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={[
          {
            position: 'relative',
            maxWidth,
            mx: 'auto',
          },
          ...(Array.isArray(containerSx) ? containerSx : [containerSx]),
        ]}
      >
        {children}
      </Box>
    </Box>
  );
}
