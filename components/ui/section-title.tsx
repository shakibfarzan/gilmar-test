import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

export interface SectionTitleProps {
  title: string;
  id?: string;
  maxWidth?: number;
  sx?: SxProps<Theme>;
}

export default function SectionTitle({ title, id, maxWidth = 720, sx }: SectionTitleProps) {
  return (
    <Typography
      component="h2"
      id={id}
      sx={[
        {
          mt: { xs: 2, md: 2.5 },
          fontWeight: 800,
          fontSize: { xs: 22, sm: 26, md: 32 },
          lineHeight: 1.5,
          maxWidth,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {title}
    </Typography>
  );
}
