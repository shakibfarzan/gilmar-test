import { Layer } from '@/components/ui';
import Box from '@mui/material/Box';
import type { RulesConfettiProps } from './rules.types';

export default function RulesConfetti({ confetti }: RulesConfettiProps) {
  return (
    <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      {confetti.map(({ id, color, size, rotate, position }) => (
        <Layer key={id} position={position}>
          <Box
            sx={{
              width: size,
              height: size,
              borderRadius: '3px',
              bgcolor: color,
              opacity: 0.85,
              transform: `rotate(${rotate}deg)`,
            }}
          />
        </Layer>
      ))}
    </Box>
  );
}
