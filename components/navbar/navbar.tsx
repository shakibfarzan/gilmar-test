'use client';

import Box from '@mui/material/Box';
import NavbarCta from './navbar-cta';
import NavbarLinks from './navbar-links';
import NavbarLogo from './navbar-logo';
import NavbarMenu from './navbar-menu';
import type { NavbarProps } from './navbar.types';

export default function Navbar({ content }: NavbarProps) {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: { xs: 0, md: 16 },
        zIndex: (theme) => theme.zIndex.appBar,
        p: 1,
        m: { xs: 0, md: 4 },
        bgcolor: 'background.paper',
        borderRadius: { xs: 0, md: 999 },
        boxShadow: { xs: 'none', md: '0 14px 34px -20px rgba(9, 47, 39, 0.45)' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, md: 3 },
          p: 1,
          bgcolor: 'background.default',
          borderRadius: { xs: 0, md: 999 },
        }}
      >
        <NavbarLogo logo={content.logo} />
        <NavbarLinks links={content.links} />
        <Box aria-hidden sx={{ flex: 1, display: { xs: 'block', md: 'none' } }} />
        <NavbarMenu links={content.links} />
        <NavbarCta cta={content.cta} />
      </Box>
    </Box>
  );
}
