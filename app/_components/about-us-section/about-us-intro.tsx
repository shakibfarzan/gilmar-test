import { CtaButton, FramedIcon } from '@/components/ui';
import Box from '@mui/material/Box';
import AboutUsDescription from './about-us-description';
import AboutUsTitle from './about-us-title';
import type { AboutUsIntroProps } from './about-us.types';

export default function AboutUsIntro({ badge, title, description, cta }: AboutUsIntroProps) {
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
      <AboutUsTitle title={title} />
      <AboutUsDescription description={description} />
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
