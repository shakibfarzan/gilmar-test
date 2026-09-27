import { SectionIntro } from '@/components/ui';
import type { ResidenceHeaderProps } from './residence.types';

export default function ResidenceHeader({ badge, title, description }: ResidenceHeaderProps) {
  return (
    <SectionIntro
      badge={badge}
      title={title}
      titleId="residence-title"
      description={description}
      align="center"
      maxWidth={620}
    />
  );
}
