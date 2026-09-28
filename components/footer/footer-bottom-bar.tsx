import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FooterSocials from './footer-socials';
import type { FooterBottomBarProps } from './footer.types';

export default function FooterBottomBar({ copyright, socials }: FooterBottomBarProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        px: { xs: 2.5, md: 3 },
        py: 1,
        bgcolor: 'background.default',
        borderRadius: 999,
        border: '4px solid white',
      }}
    >
      <Typography
        component="p"
        sx={{ fontSize: { xs: 12, md: 14 }, fontWeight: 600, color: 'text.secondary' }}
      >
        {copyright}
      </Typography>
      <FooterSocials items={socials} />
    </Box>
  );
}
