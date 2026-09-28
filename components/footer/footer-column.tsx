import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { FooterColumnProps } from './footer.types';

export default function FooterColumn({ title, children, sx }: FooterColumnProps) {
  return (
    <Box sx={[{ position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Typography
        component="h3"
        sx={{ mb: 2, fontSize: { xs: 15, md: 16 }, fontWeight: 800, lineHeight: 1.5 }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}
