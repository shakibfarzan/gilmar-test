import Typography from '@mui/material/Typography';
import type { AboutUsTitleProps } from './about-us.types';

export default function AboutUsTitle({ title, id = 'about-us-title' }: AboutUsTitleProps) {
  return (
    <Typography
      component="h2"
      id={id}
      sx={{
        mt: { xs: 2, md: 2.5 },
        fontWeight: 800,
        fontSize: { xs: 22, sm: 26, md: 32 },
        lineHeight: 1.5,
        maxWidth: 640,
      }}
    >
      {title}
    </Typography>
  );
}
