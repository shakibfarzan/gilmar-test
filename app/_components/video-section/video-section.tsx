import { GridBackdrop } from '@/components/ui';
import Box from '@mui/material/Box';
import VideoDecoration from './video-decoration';
import VideoIntro from './video-intro';
import VideoMedia from './video-media';
import type { VideoSectionProps } from './video.types';

export default function VideoSection({ content }: VideoSectionProps) {
  return (
    <Box
      component="section"
      aria-labelledby="video-title"
      sx={{
        position: 'relative',
        px: { xs: 2, md: 2.5 },
        py: { xs: 6, md: 10 },
        overflow: 'clip',
      }}
    >
      <GridBackdrop
        sx={{
          insetInlineStart: 0,
          top: 0,
          width: { xs: '100%', md: '46%' },
          height: '100%',
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Box
        sx={{
          position: 'relative',
          maxWidth: 1280,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 6, md: 5 },
        }}
      >
        <VideoIntro
          badge={content.badge}
          title={content.title}
          description={content.description}
          cta={content.cta}
        />
        <VideoMedia media={content.media} />
        <VideoDecoration image={content.decoration.image} position={content.decoration.position} />
      </Box>
    </Box>
  );
}
