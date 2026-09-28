import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import type { PackagesFeatureCardProps } from './packages.types';

export default function PackagesFeatureCard({ feature }: PackagesFeatureCardProps) {
  return (
    <Box
      component="li"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 1, md: 1.5 },
        px: 1.5,
        py: { xs: 2, md: 2.5 },
        bgcolor: 'background.paper',
        borderRadius: { xs: 3, md: 4 },
        border: '1px solid rgba(0, 0, 0, 0.04)',
        boxShadow: '0 18px 40px -20px rgba(9, 47, 39, 0.35)',
      }}
    >
      <Image
        src={feature.icon.src}
        alt={feature.icon.alt}
        width={feature.icon.width}
        height={feature.icon.height}
        aria-hidden
        style={{ width: 44, height: 44 }}
      />
      <Typography
        component="span"
        sx={{
          fontSize: { xs: 12, md: 14 },
          fontWeight: 600,
          color: 'text.secondary',
          whiteSpace: 'nowrap',
        }}
      >
        {feature.label}
      </Typography>
    </Box>
  );
}
