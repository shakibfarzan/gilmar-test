'use client';

import { Icon } from '@/components/icons';
import Button from '@mui/material/Button';
import type { NavbarCtaProps } from './navbar.types';

export default function NavbarCta({ cta }: NavbarCtaProps) {
  return (
    <Button
      variant="contained"
      href={cta.href}
      startIcon={<Icon name={cta.icon} size={22} />}
      sx={{
        flexShrink: 0,
        whiteSpace: 'nowrap',
      }}
    >
      {cta.label}
    </Button>
  );
}
