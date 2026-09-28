import Box from '@mui/material/Box';
import type { PackagesDotsProps } from './packages.types';

export default function PackagesDots({ count, activeIndex, onSelect }: PackagesDotsProps) {
  return (
    <Box
      role="tablist"
      aria-label="تصاویر پکیج‌ها"
      sx={{
        position: 'absolute',
        bottom: { xs: 12, md: 20 },
        insetInlineEnd: { xs: 14, md: 22 },
        zIndex: 1,
        display: 'flex',
        gap: { xs: 1, md: 2 },
      }}
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
            aria-label={`تصویر ${index + 1}`}
            onClick={() => onSelect(index)}
            sx={{
              width: { xs: 32, md: 42, lg: 64 },
              height: { xs: 5, md: 7 },
              p: 0,
              border: 0,
              borderRadius: 999,
              bgcolor: active ? 'common.white' : 'rgba(255, 255, 255, 0.45)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          />
        );
      })}
    </Box>
  );
}
