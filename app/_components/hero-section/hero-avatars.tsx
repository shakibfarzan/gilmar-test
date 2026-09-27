import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import type { HeroAvatar, HeroAvatarsProps } from './hero-section.types';

export default function HeroAvatars({ badge }: HeroAvatarsProps) {
  return (
    <Box
      sx={{
        position: { md: 'absolute', sm: 'static' },
        right: 10,
        bottom: 26,
        display: 'flex',
        alignItems: 'center',
        justifySelf: 'end',
        gap: 1,
        p: '6px 12px',
        bgcolor: 'background.paper',
        borderRadius: 999,
        boxShadow: '0 12px 32px rgba(15, 23, 42, 0.18)',
        width: 'min-content',
        mt: { sm: 2 },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {badge.avatars.map(({ alt, src }, index) => (
          <Avatar alt={alt} marginInlineStart={index === 0 ? 0 : -12} src={src} key={src} />
        ))}
      </Box>
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 700,
          whiteSpace: 'nowrap',
        }}
      >
        {badge.label}
      </Typography>
    </Box>
  );
}

const Avatar: React.FC<HeroAvatar & { marginInlineStart: number }> = ({
  alt,
  marginInlineStart,
  src,
}) => {
  return (
    <Image
      key={src}
      src={src}
      alt={alt}
      width={30}
      height={30}
      style={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        border: '2px solid background.paper',
        backgroundColor: 'background.paper',
        marginInlineStart,
      }}
    />
  );
};
