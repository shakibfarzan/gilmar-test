import { Icon } from '@/components/icons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { CommentsCardProps } from './comments.types';

export default function CommentsCard({ item }: CommentsCardProps) {
  return (
    <Box
      sx={{
        flex: '0 0 100%',
        width: '100%',
        scrollSnapAlign: 'start',
        p: 1,
        bgcolor: 'background.default',
        borderRadius: { xs: 4, md: 5 },
        border: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: { xs: 4, md: 5 },
          boxShadow: '0 30px 60px -32px rgba(9, 47, 39, 0.35)',
          p: { xs: 3, md: 5 },
          textAlign: 'center',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Icon name="Quote" size={28} />
        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: 14, md: 16 },
            fontWeight: 600,
            lineHeight: { xs: '28px', md: '34px' },
            color: 'text.primary',
          }}
        >
          {item.quote}
        </Typography>
        <Typography sx={{ mt: { xs: 2.5, md: 3 }, fontSize: { xs: 14, md: 16 }, fontWeight: 800 }}>
          {item.name}
        </Typography>
        <Typography
          sx={{ mt: 0.5, fontSize: { xs: 12, md: 13 }, fontWeight: 600, color: 'text.secondary' }}
        >
          {item.role}
        </Typography>
      </Box>
    </Box>
  );
}
