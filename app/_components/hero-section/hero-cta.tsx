import { Icon } from '@/components/icons';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import type { HeroCtaProps } from './hero-section.types';

export default function HeroCta({ cta }: HeroCtaProps) {
  return (
    <Button
      variant="contained"
      href={cta.href}
      endIcon={
        <Box
          component="span"
          aria-hidden
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: '50%',
            bgcolor: 'background.paper',
          }}
        >
          <Icon name={cta.icon} size={24} />
        </Box>
      }
      sx={{
        mt: { xs: 3.5, md: 4.5 },
        fontSize: { xs: 14, md: 16 },
        py: 1,
        pr: 1.5,
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {cta.label}
    </Button>
  );
}
