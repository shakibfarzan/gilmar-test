import { CardGrid, CtaButton, SectionIntro } from '@/components/ui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PackagesFeatureCard from './packages-feature-card';
import type { PackagesDetailsProps } from './packages.types';

const dividerSx = {
  border: 0,
  borderTop: '1px dashed',
  borderColor: 'rgba(9, 47, 39, 0.2)',
  my: { xs: 3, md: 4 },
} as const;

export default function PackagesDetails({
  badge,
  title,
  description,
  details,
}: PackagesDetailsProps) {
  return (
    <Box
      sx={{ position: 'relative', zIndex: 1, flex: { md: '1 1 0' }, width: '100%', minWidth: 0 }}
    >
      <SectionIntro
        badge={badge}
        title={title}
        titleId="packages-title"
        description={description}
        align="start"
        maxWidth={560}
      />

      <Box component="hr" aria-hidden sx={dividerSx} />

      <Typography component="h3" sx={{ fontWeight: 800, fontSize: { xs: 16, md: 18 } }}>
        {details.name}
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: { xs: 1, md: 1.5 },
          fontSize: { xs: 12, md: 14 },
          fontWeight: 600,
          color: 'text.secondary',
        }}
      >
        {details.includes}
      </Typography>

      <CardGrid
        columns={{ xs: 2, sm: 4 }}
        sx={{ mt: { xs: 2.5, md: 3.5 }, gap: { xs: 2, md: 2.5 } }}
      >
        {details.features.map((feature) => (
          <PackagesFeatureCard key={feature.id} feature={feature} />
        ))}
      </CardGrid>

      <Box component="hr" aria-hidden sx={dividerSx} />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Typography
          component="p"
          sx={{ fontWeight: 800, fontSize: { xs: 14, md: 16 }, color: 'secondary.dark' }}
        >
          {details.price}
        </Typography>
        <CtaButton
          label={details.cta.label}
          href={details.cta.href}
          icon={details.cta.icon}
          iconCircleSize={34}
          iconSize={20}
        />
      </Box>
    </Box>
  );
}
