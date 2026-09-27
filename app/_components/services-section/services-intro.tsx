import { FramedIcon } from '@/components/ui';
import Box from '@mui/material/Box';
import ServicesDescription from './services-description';
import type { ServicesIntroProps } from './services-section.types';
import ServicesTitle from './services-title';

export default function ServicesIntro({ badge, title, description }: ServicesIntroProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        flex: { lg: '0 0 70%', md: '0 0 50%', xs: '0 0 100%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'start' },
      }}
    >
      <FramedIcon icon={badge.icon} />
      <ServicesTitle title={title} />
      <ServicesDescription description={description} />
    </Box>
  );
}
