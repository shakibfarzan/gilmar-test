import type { IconName } from '@/components/icons';
import Button from '@mui/material/Button';
import type { SxProps, Theme } from '@mui/material/styles';
import IconCircle from './icon-circle';

export interface CtaButtonProps {
  label: string;
  href: string;
  icon?: IconName;
  iconCircleSize?: number;
  iconSize?: number;
  sx?: SxProps<Theme>;
}

export default function CtaButton({
  label,
  href,
  icon,
  iconCircleSize = 40,
  iconSize = 24,
  sx,
}: CtaButtonProps) {
  return (
    <Button
      variant="contained"
      href={href}
      endIcon={
        icon ? (
          <IconCircle name={icon} variant="paper" size={iconCircleSize} iconSize={iconSize} />
        ) : undefined
      }
      sx={[
        {
          fontSize: { xs: 14, md: 16 },
          py: 1,
          pr: 1.5,
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          width: 'max-content',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {label}
    </Button>
  );
}
