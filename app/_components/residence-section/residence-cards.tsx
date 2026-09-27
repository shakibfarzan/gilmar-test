import { CardGrid } from '@/components/ui';
import ResidenceCard from './residence-card';
import type { ResidenceCardsProps } from './residence.types';

export default function ResidenceCards({ items }: ResidenceCardsProps) {
  return (
    <CardGrid columns={{ xs: 1, sm: 2, lg: 4 }} sx={{ mt: { xs: 4, md: 6 } }}>
      {items.map((item) => (
        <ResidenceCard key={item.id} item={item} />
      ))}
    </CardGrid>
  );
}
