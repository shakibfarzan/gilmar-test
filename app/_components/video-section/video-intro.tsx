import { CtaButton, FramedIcon } from '@/components/ui';
import Box from '@mui/material/Box';
import VideoDescription from './video-description';
import VideoTitle from './video-title';
import type { VideoIntroProps } from './video.types';

export default function VideoIntro({ badge, title, description, cta }: VideoIntroProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        flex: { md: '1 1 0' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'start' },
      }}
    >
      <FramedIcon icon={badge.icon} />
      <VideoTitle title={title} />
      <VideoDescription description={description} />
      <CtaButton
        label={cta.label}
        href={cta.href}
        icon={cta.icon}
        iconCircleSize={34}
        iconSize={20}
        sx={{ mt: { xs: 3, md: 4 } }}
      />
    </Box>
  );
}
