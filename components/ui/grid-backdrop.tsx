import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

export interface GridBackdropProps {
  cell?: number;
  color?: string;
  opacity?: number;
  sx?: SxProps<Theme>;
}

export default function GridBackdrop({
  cell = 44,
  color = 'rgba(9, 47, 39, 0.07)',
  opacity = 1,
  sx,
}: GridBackdropProps) {
  const fade = 'radial-gradient(60% 60% at 50% 45%, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%)';

  return (
    <Box
      aria-hidden
      sx={[
        {
          position: 'absolute',
          pointerEvents: 'none',
          opacity,
          backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
          backgroundSize: `${cell}px ${cell}px`,
          maskImage: fade,
          WebkitMaskImage: fade,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
