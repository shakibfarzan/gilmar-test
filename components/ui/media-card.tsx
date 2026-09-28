'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import type { ImageAsset, ResponsiveRatio } from './ui.types';

export interface MediaCardProps {
  href: string;
  image: ImageAsset;
  title: string;
  subtitle?: string;
  sizes?: string;
  ratio?: ResponsiveRatio;
  subtitleLines?: number;
  sx?: SxProps<Theme>;
}

const DEFAULT_RATIO: ResponsiveRatio = { xs: '4 / 5', md: '1 / 1' };

export default function MediaCard({
  href,
  image,
  title,
  subtitle,
  sizes,
  ratio = DEFAULT_RATIO,
  subtitleLines,
  sx,
}: MediaCardProps) {
  return (
    <Box
      component={Link}
      href={href}
      sx={[
        {
          position: 'relative',
          display: 'block',
          width: '100%',
          aspectRatio: ratio,
          borderRadius: { xs: '16px', md: '24px' },
          overflow: 'hidden',
          textDecoration: 'none',
          color: 'common.white',
          boxShadow: '0 12px 32px -16px rgb(0 0 0 / 0.45)',
          '& .media-card-image': { transition: 'transform 0.4s ease' },
          '&:hover .media-card-image': { transform: 'scale(1.05)' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Image
        className="media-card-image"
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        style={{ objectFit: 'cover' }}
      />

      <Box
        sx={{
          position: 'absolute',
          insetInline: 0,
          bottom: 0,
          p: { xs: 2, md: 2.5 },
          textAlign: 'start',
          background: 'linear-gradient(to top, rgb(0 0 0 / 0.7), rgb(0 0 0 / 0))',
        }}
      >
        <Typography
          component="h3"
          sx={{ fontWeight: 800, fontSize: { xs: 16, md: 18 }, lineHeight: 1.3 }}
        >
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            component="p"
            sx={{
              mt: 0.75,
              fontWeight: 600,
              fontSize: { xs: 12, md: 13 },
              lineHeight: 1.9,
              opacity: 0.9,
              ...(subtitleLines
                ? {
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: subtitleLines,
                    overflow: 'hidden',
                  }
                : null),
            }}
          >
            {subtitle}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}
