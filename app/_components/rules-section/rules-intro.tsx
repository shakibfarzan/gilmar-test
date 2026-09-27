import { FramedIcon } from '@/components/ui';
import Box from '@mui/material/Box';
import RulesDescription from './rules-description';
import RulesTitle from './rules-title';
import type { RulesIntroProps } from './rules.types';

export default function RulesIntro({ badge, title, description }: RulesIntroProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <FramedIcon icon={badge.icon} />
      <RulesTitle title={title} />
      <RulesDescription description={description} />
    </Box>
  );
}
