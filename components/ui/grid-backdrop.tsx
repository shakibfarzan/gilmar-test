import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

export interface GridBackdropProps {
  opacity?: number;
  sx?: SxProps<Theme>;
}

export default function GridBackdrop({ opacity = 1, sx }: GridBackdropProps) {
  return (
    <Box
      aria-hidden
      sx={[
        {
          position: 'absolute',
          pointerEvents: 'none',
          opacity,
          backgroundImage: 'url("/about-us/map.png")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
