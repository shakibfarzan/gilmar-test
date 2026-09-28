import { SectionIntro } from '@/components/ui';
import type { BlogsHeaderProps } from './blogs.types';

export default function BlogsHeader({ badge, title, description }: BlogsHeaderProps) {
  return (
    <SectionIntro
      badge={badge}
      title={title}
      titleId="blogs-title"
      description={description}
      align="center"
      maxWidth={700}
    />
  );
}
