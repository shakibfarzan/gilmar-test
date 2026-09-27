import { GridBackdrop } from '@/components/ui';
import Box from '@mui/material/Box';
import RulesCards from './rules-cards';
import RulesConfetti from './rules-confetti';
import RulesIntro from './rules-intro';
import type { RulesSectionProps } from './rules.types';

export default function RulesSection({ content }: RulesSectionProps) {
  return (
    <Box
      component="section"
      aria-labelledby="rules-title"
      sx={{
        position: 'relative',
        px: { xs: 2, md: 2.5 },
        py: { xs: 6, md: 10 },
        overflow: 'clip',
      }}
    >
      <GridBackdrop
        sx={{
          insetInlineStart: 0,
          top: '18%',
          width: { xs: '100%', md: '38%' },
          height: '72%',
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Box
        sx={{
          position: 'relative',
          maxWidth: 1280,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <RulesConfetti confetti={content.confetti} />
        <RulesIntro badge={content.badge} title={content.title} description={content.description} />
        <RulesCards cards={content.cards} />
      </Box>
    </Box>
  );
}
