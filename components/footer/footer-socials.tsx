import { IconCircle } from '@/components/ui';
import Box from '@mui/material/Box';
import type { FooterSocialsProps } from './footer.types';

const CIRCLE_SIZE = 40;

export default function FooterSocials({ items }: FooterSocialsProps) {
  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 1.5,
        listStyle: 'none',
        m: 0,
        p: 0,
      }}
    >
      {items.map((item) => (
        <Box component="li" key={item.id} sx={{ display: 'inline-flex' }}>
          <Box
            component="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            sx={{
              display: 'inline-flex',
              borderRadius: '50%',
              transition: 'transform 250ms ease',
              '&:hover': { transform: 'scale(1.06)' },
            }}
          >
            <IconCircle name={item.icon} size={CIRCLE_SIZE} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
