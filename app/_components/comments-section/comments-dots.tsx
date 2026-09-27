import Box from '@mui/material/Box';
import type { CommentsDotsProps } from './comments.types';

export default function CommentsDots({ count, activeIndex, onSelect }: CommentsDotsProps) {
  return (
    <Box
      role="tablist"
      aria-label="نظرات مهمانان"
      sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: { xs: 3, md: 4 } }}
    >
      {Array.from({ length: count }).map((_, index) => {
        const active = index === activeIndex;
        return (
          <Box
            key={index}
            component="button"
            type="button"
            role="tab"
            aria-selected={active}
            aria-label={`نظر ${index + 1}`}
            onClick={() => onSelect(index)}
            sx={{
              width: 8,
              height: 8,
              p: 0,
              border: 0,
              borderRadius: 999,
              bgcolor: active ? 'secondary.main' : 'rgba(9, 47, 39, 0.15)',
              cursor: 'pointer',
              transition: 'width 0.3s ease, background-color 0.3s ease',
            }}
          />
        );
      })}
    </Box>
  );
}
