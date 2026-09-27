import { GridBackdrop, Section } from '@/components/ui';
import ResidenceCards from './residence-cards';
import ResidenceHeader from './residence-header';
import type { ResidenceSectionProps } from './residence.types';

export default function ResidenceSection({ content }: ResidenceSectionProps) {
  return (
    <Section id="residence" labelledBy="residence-title">
      <GridBackdrop
        sx={{
          insetInlineEnd: 0,
          top: 0,
          width: { xs: '100%', md: '44%' },
          height: '58%',
          display: { xs: 'none', md: 'block' },
        }}
      />

      <ResidenceHeader
        badge={content.badge}
        title={content.title}
        description={content.description}
      />
      <ResidenceCards items={content.items} />
    </Section>
  );
}
