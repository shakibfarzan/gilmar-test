import Typography from '@mui/material/Typography';
import type { AboutUsDescriptionProps } from './about-us.types';

export default function AboutUsDescription({ description }: AboutUsDescriptionProps) {
  return (
    <Typography
      component="p"
      sx={{
        mt: { xs: 2, md: 2.5 },
        fontSize: { xs: 12, md: 14 },
        fontWeight: 600,
        lineHeight: { xs: '30px', md: '36px' },
        color: 'text.secondary',
        textAlign: 'justify',
        maxWidth: 640,
      }}
    >
      {description}
    </Typography>
  );
}
