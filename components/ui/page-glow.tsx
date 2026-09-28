import Box from '@mui/material/Box';

export type PageGlowPlacement = 'top' | 'bottom';

export interface PageGlowProps {
  placement: PageGlowPlacement;
}

const GLOW_COLOR = '#CEDEFE';

const GLOW_STYLES: Record<
  PageGlowPlacement,
  { backgroundImage: string; height: { xs: number | string; md: number | string } }
> = {
  top: {
    backgroundImage:
      'radial-gradient(52% 120% at 50% 0%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 60%),' +
      `linear-gradient(180deg, ${GLOW_COLOR} 0%, rgba(206, 222, 254, 0.55) 55%, rgba(206, 222, 254, 0) 100%)`,
    height: { xs: 360, md: 'clamp(420px, 38vw, 560px)' },
  },
  bottom: {
    backgroundImage: `radial-gradient(48% 115% at 100% 100%, ${GLOW_COLOR} 0%, rgba(206, 222, 254, 0) 72%)`,
    height: { xs: 280, md: 420 },
  },
};

export default function PageGlow({ placement }: PageGlowProps) {
  const { backgroundImage, height } = GLOW_STYLES[placement];

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        [placement]: 0,
        height,
        zIndex: -1,
        pointerEvents: 'none',
        backgroundImage,
      }}
    />
  );
}
