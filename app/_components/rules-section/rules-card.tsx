import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RulesCardMedia from './rules-card-media';
import type { RulesCardProps } from './rules.types';

export default function RulesCard({
  title,
  description,
  image,
  offset = 0,
  rotationDegree,
}: RulesCardProps) {
  return (
    <Box
      component="li"
      sx={{
        position: 'relative',
        zIndex: 1,
        flex: { md: '1 1 0' },
        maxWidth: { xs: 320, md: 300 },
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        listStyle: 'none',
        mt: { xs: 0, md: `${offset}px` },
      }}
    >
      <RulesCardMedia image={image} rotationDegree={rotationDegree} />
      <Typography
        component="h3"
        sx={{
          mt: { xs: 2.5, md: 3.5 },
          fontSize: { xs: 15, md: 16 },
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: { xs: 1, md: 1.5 },
          fontSize: { xs: 12, md: 14 },
          fontWeight: 600,
          lineHeight: { xs: '28px', md: '32px' },
          color: 'text.secondary',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
