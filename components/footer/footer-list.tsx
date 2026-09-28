import Box from '@mui/material/Box';
import type { FooterListProps } from './footer.types';

export default function FooterList({ children, sx }: FooterListProps) {
  return (
    <Box
      component="ul"
      sx={[
        {
          listStyle: 'none',
          m: 0,
          p: 0,
          fontSize: { xs: 13, md: 14 },
          fontWeight: 600,
          lineHeight: { xs: '28px', md: '32px' },
          color: 'text.secondary',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
