import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import type { ServiceCardProps } from './services-section.types';

export default function ServiceCard({ item, active = false }: ServiceCardProps) {
  return (
    <Box
      component={Link}
      href={item.href}
      sx={{
        position: 'relative',
        display: 'block',
        flex: '0 0 auto',
        width: { xs: 210, sm: 240, md: 262 },
        aspectRatio: '262 / 305',
        borderRadius: { xs: 4, md: 5 },
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        textDecoration: 'none',
        color: 'common.white',
        boxShadow: active
          ? '0 40px 60px -28px rgba(9, 47, 39, 0.55)'
          : '0 30px 50px -28px rgba(9, 47, 39, 0.4)',
        transform: active ? 'scale(1.12)' : 'scale(1)',
        transition: 'transform 0.45s ease, box-shadow 0.45s ease',
        willChange: 'transform',
        '& .service-card-image': { transition: 'transform 0.4s ease' },
        '&:hover .service-card-image': { transform: 'scale(1.05)' },
      }}
    >
      <Image
        className="service-card-image"
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(max-width: 600px) 240px, (max-width: 900px) 270px, 300px"
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
