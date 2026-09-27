import type { IconName } from '@/components/icons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import IconCircle from './icon-circle';
import type { IconTone } from './ui.types';

export interface IconPillProps {
  label: string;
  icon: IconName;
  iconTone?: IconTone;
  iconSize?: number;
  sx?: SxProps<Theme>;
}

export default function IconPill({ label, icon, iconTone, iconSize, sx }: IconPillProps) {
  return (
    <Box
      sx={[
        {
          display: 'inline-flex',
          alignItems: 'center',
          gap: { xs: 1, md: 1.5 },
          p: 0.75,
          pr: { xs: 1.75, md: 2.5 },
          bgcolor: 'background.paper',
          borderRadius: 999,
          boxShadow: '0 18px 40px -20px rgba(9, 47, 39, 0.45)',
          width: 'max-content',
          maxWidth: '100%',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <IconCircle name={icon} tone={iconTone} size={iconSize ?? 48} />
      <Typography
        component="span"
        sx={{
          fontSize: { xs: 12, md: 14 },
          fontWeight: 700,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
