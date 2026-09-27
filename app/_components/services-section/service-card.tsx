import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import type { ServiceCardProps } from './services-section.types';

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <Box
      component={Link}
      href={item.href}
      sx={{
        position: 'relative',
        display: 'block',
        flex: '0 0 auto',
        width: { xs: '78%', sm: 300, md: 440, lg: 500 },
        aspectRatio: { xs: '4 / 5', md: '1 / 1' },
        borderRadius: { xs: '16px', md: '24px' },
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        textDecoration: 'none',
        color: 'common.white',
        boxShadow: '0 12px 32px -16px rgb(0 0 0 / 0.45)',
        '& .service-card-image': { transition: 'transform 0.4s ease' },
        '&:hover .service-card-image': { transform: 'scale(1.05)' },
      }}
    >
      <Image
        className="service-card-image"
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(max-width: 600px) 78vw, (max-width: 1200px) 440px, 500px"
        style={{ objectFit: 'cover' }}
      />
      <Box
        sx={{
          position: 'absolute',
          insetInline: 0,
          bottom: 0,
          p: { xs: 2, md: 2.5 },
          textAlign: 'start',
          fontWeight: 800,
          fontSize: { xs: 16, md: 18 },
          lineHeight: 1.3,
          background: 'linear-gradient(to top, rgb(0 0 0 / 0.7), rgb(0 0 0 / 0))',
        }}
      >
        {item.title}
      </Box>
    </Box>
  );
}
