import Typography from '@mui/material/Typography';
import type { VideoTitleProps } from './video.types';

export default function VideoTitle({ title, id = 'video-title' }: VideoTitleProps) {
  return (
    <Typography
      component="h2"
      id={id}
      sx={{
        mt: { xs: 2, md: 2.5 },
        fontWeight: 800,
        fontSize: { xs: 22, sm: 26, md: 32 },
        lineHeight: 1.5,
        maxWidth: 460,
      }}
    >
      {title}
    </Typography>
  );
}
