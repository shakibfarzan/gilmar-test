'use client';

import Box from '@mui/material/Box';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavbarLinksProps } from './navbar.types';

export default function NavbarLinks({ links }: NavbarLinksProps) {
  const pathname = usePathname();

  return (
    <Box
      component="nav"
      aria-label="منوی اصلی"
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { md: 1.5, lg: 2.5 },
        flex: 1,
      }}
    >
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Box
            key={link.href}
            component={Link}
            href={link.href}
            sx={{
              py: 0.75,
              px: 1.25,
              borderRadius: 2,
              fontSize: 14,
              fontWeight: 600,
              color: isActive ? 'primary.main' : 'text.primary',
              textDecoration: 'none',
              transition: 'color 150ms ease',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {link.label}
          </Box>
        );
      })}
    </Box>
  );
}
