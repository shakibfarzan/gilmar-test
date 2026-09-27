import Box from '@mui/material/Box';
import Image from 'next/image';
import type { RulesCardMediaProps } from './rules.types';

export default function RulesCardMedia({ image, rotationDegree }: RulesCardMediaProps) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xs: 132, md: 152 },
        height: { xs: 132, md: 152 },
        borderRadius: { xs: 5, md: 7 },
        bgcolor: 'background.paper',
        boxShadow: '0 30px 50px -28px rgba(9, 47, 39, 0.45)',
        transform: `rotate(${rotationDegree}deg)`,
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 900px) 100px, 112px"
        style={{ width: '70%', height: 'auto', display: 'block' }}
      />
    </Box>
  );
}
