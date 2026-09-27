import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

export interface SectionDescriptionProps {
  description: string;
  maxWidth?: number;
  sx?: SxProps<Theme>;
}

export default function SectionDescription({
  description,
  maxWidth = 720,
  sx,
}: SectionDescriptionProps) {
  return (
    <Typography
      component="p"
      sx={[
        {
          mt: { xs: 1.5, md: 2 },
          fontSize: { xs: 12, md: 14 },
          fontWeight: 600,
          lineHeight: { xs: '28px', md: '32px' },
          color: 'text.secondary',
          maxWidth,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {description}
    </Typography>
  );
}
