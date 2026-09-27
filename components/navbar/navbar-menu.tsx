'use client';

import { Icon } from '@/components/icons';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { NavbarMenuProps } from './navbar.types';

export default function NavbarMenu({ links }: NavbarMenuProps) {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <IconButton
        aria-label="باز کردن منو"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        sx={{ color: 'text.primary' }}
      >
        <Icon name="Menu" size={24} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{ paper: { sx: { mt: 1, minWidth: 220 } } }}
      >
        {links.map((link) => (
          <MenuItem
            key={link.href}
            component={Link}
            href={link.href}
            selected={pathname === link.href}
            onClick={() => setAnchorEl(null)}
          >
            {link.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
