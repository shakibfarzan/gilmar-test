import { Icon, type IconName } from '@/components/icons';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import Image from 'next/image';
import type { ImageAsset } from './ui.types';

export const ICON_CONTAINER_ASSET: ImageAsset = {
  src: '/icons/icon-container.png',
  alt: '',
  width: 92,
  height: 60,
};

const SIZE_MAGIC_NUMBER = 0.35;

export interface FramedIconProps {
  icon: IconName;
  frame?: ImageAsset;
  width?: number;
  sx?: SxProps<Theme>;
}

export default function FramedIcon({
  icon,
  frame = ICON_CONTAINER_ASSET,
  width = frame.width,
  sx,
}: FramedIconProps) {
  const height = Math.round((width * frame.height) / frame.width);

  return (
    <Box
      sx={[
        {
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width,
          height,
          flexShrink: 0,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Image
        src={frame.src}
        alt={frame.alt}
        width={frame.width}
        height={frame.height}
        aria-hidden
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
      <Icon name={icon} size={Math.round(height * SIZE_MAGIC_NUMBER)} />
    </Box>
  );
}
