import { GridBackdrop, Section } from '@/components/ui';
import { Box } from '@mui/material';
import FaqAccordion from './faq-accordion';
import FaqIntro from './faq-intro';
import type { FaqSectionProps } from './faq.types';

export default function FaqSection({ content }: FaqSectionProps) {
  return (
    <Section id="faq" labelledBy="faq-title">
      <GridBackdrop
        sx={{
          top: 0,
          width: { xs: '100%', md: '52%' },
          height: '100%',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 6, md: 8 },
        }}
      >
        <FaqIntro content={content} />
        <Box sx={{ flex: { md: '1 1 0' }, width: { xs: '100%', md: 'auto' }, direction: 'rtl' }}>
          <FaqAccordion items={content.items} />
        </Box>
      </Box>
    </Section>
  );
}
