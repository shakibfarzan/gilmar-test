import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';
import type { ResponsiveColumns } from './ui.types';

export interface CardGridProps {
  children: ReactNode;
  columns?: ResponsiveColumns;
  sx?: SxProps<Theme>;
}

const DEFAULT_COLUMNS: ResponsiveColumns = { xs: 1, sm: 2, lg: 4 };

const toTemplate = (columns: ResponsiveColumns) =>
  Object.fromEntries(
    Object.entries(columns).map(([breakpoint, count]) => [
      breakpoint,
      `repeat(${count}, minmax(0, 1fr))`,
    ])
  );

export default function CardGrid({ children, columns = DEFAULT_COLUMNS, sx }: CardGridProps) {
  return (
    <Box
      component="ul"
      sx={[
        {
          display: 'grid',
          gridTemplateColumns: toTemplate(columns),
          gap: { xs: 2.5, md: 3 },
          p: 0,
          m: 0,
          listStyle: 'none',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
