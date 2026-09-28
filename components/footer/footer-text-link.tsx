'use client';

import Box from '@mui/material/Box';
import Link from 'next/link';
import type { FooterTextLinkProps } from './footer.types';

export default function FooterTextLink({ href, children }: FooterTextLinkProps) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        transition: 'color 150ms ease',
        '&:hover': { color: 'primary.main' },
      }}
    >
      {children}
    </Box>
  );
}
