import { Section, SectionIntro } from '@/components/ui';
import Box from '@mui/material/Box';
import CommentsBackdrop from './comments-backdrop';
import CommentsCarousel from './comments-carousel';
import type { CommentsSectionProps } from './comments.types';

export default function CommentsSection({ content }: CommentsSectionProps) {
  return (
    <Section id="comments" labelledBy="comments-title">
      <SectionIntro
        badge={content.badge}
        title={content.title}
        titleId="comments-title"
        description={content.description}
        align="center"
        maxWidth={620}
      />

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 5,
          minHeight: { md: 560 },
        }}
      >
        <CommentsBackdrop avatars={content.avatars} />
        <CommentsCarousel items={content.items} />
      </Box>
    </Section>
  );
}
