import Box from '@mui/material/Box';
import RulesCard from './rules-card';
import RulesPath from './rules-path';
import type { RulesCardsProps } from './rules.types';

export default function RulesCards({ cards }: RulesCardsProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        mt: { xs: 5, md: 8 },
      }}
    >
      <RulesPath />
      <Box
        component="ul"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'center',
          gap: { xs: 6, md: 5 },
          p: 0,
          m: 0,
        }}
      >
        {cards.map((card) => (
          <RulesCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            offset={card.offset}
            rotationDegree={card.rotationDegree}
          />
        ))}
      </Box>
    </Box>
  );
}
