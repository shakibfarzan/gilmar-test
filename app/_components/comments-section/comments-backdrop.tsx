import Box from '@mui/material/Box';
import CommentsAvatar from './comments-avatar';
import type { CommentsBackdropProps } from './comments.types';

/** World-map dots with floating guest avatars, matching the intro to the services/rules backdrops. */
export default function CommentsBackdrop({ avatars }: CommentsBackdropProps) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        display: { xs: 'none', md: 'block' },
        backgroundImage: 'url("/comments/map.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        pointerEvents: 'none',
      }}
    >
      {avatars.map((avatar) => (
        <CommentsAvatar
          key={avatar.id}
          image={avatar.image}
          size={avatar.size}
          position={avatar.position}
        />
      ))}
    </Box>
  );
}
