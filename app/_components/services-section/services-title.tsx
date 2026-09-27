import Typography from '@mui/material/Typography';
import type { ServicesTitleProps } from './services-section.types';

export default function ServicesTitle({ title, id = 'services-title' }: ServicesTitleProps) {
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
