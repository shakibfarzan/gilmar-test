import { GridBackdrop, Section } from '@/components/ui';
import BlogCards from './blogs-cards';
import BlogsHeader from './blogs-header';
import type { BlogsSectionProps } from './blogs.types';

export default function BlogsSection({ content }: BlogsSectionProps) {
  return (
    <Section id="blogs" labelledBy="blogs-title">
      <GridBackdrop
        sx={{
          insetInlineEnd: 0,
          top: 0,
          width: { xs: '100%', md: '44%' },
          height: '58%',
          display: { xs: 'none', md: 'block' },
        }}
      />

      <BlogsHeader badge={content.badge} title={content.title} description={content.description} />
      <BlogCards items={content.items} />
    </Section>
  );
}
