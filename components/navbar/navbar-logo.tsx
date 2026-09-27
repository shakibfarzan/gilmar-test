'use client';

import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import type { NavbarLogoProps } from './navbar.types';

export default function NavbarLogo({ logo }: NavbarLogoProps) {
  return (
    <Box
      component={Link}
      href="/"
      aria-label={logo.alt}
      sx={{
        display: 'inline-flex',
        flexShrink: 0,
        width: { xs: 112, sm: 128, md: logo.width },
      }}
    >
      <Image
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={logo.alt}
        priority
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  );
}
