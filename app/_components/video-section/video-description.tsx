import Typography from '@mui/material/Typography';
import type { VideoDescriptionProps } from './video.types';

export default function VideoDescription({ description }: VideoDescriptionProps) {
  return (
    <Typography
      component="p"
      sx={{
        mt: { xs: 1.5, md: 2 },
        fontSize: { xs: 12, md: 14 },
        fontWeight: 600,
        lineHeight: { xs: '28px', md: '32px' },
        color: 'text.secondary',
        maxWidth: 600,
      }}
    >
      {description}
    </Typography>
  );
}
