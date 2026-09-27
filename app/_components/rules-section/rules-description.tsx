import Typography from '@mui/material/Typography';
import type { RulesDescriptionProps } from './rules.types';

export default function RulesDescription({ description }: RulesDescriptionProps) {
  return (
    <Typography
      component="p"
      sx={{
        mt: { xs: 1.5, md: 2 },
        fontSize: { xs: 12, md: 14 },
        fontWeight: 600,
        lineHeight: { xs: '28px', md: '32px' },
        color: 'text.secondary',
        maxWidth: 720,
      }}
    >
      {description}
    </Typography>
  );
}
