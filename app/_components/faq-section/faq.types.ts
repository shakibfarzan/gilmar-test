export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

import type { SectionBadge } from '@/components/ui/ui.types';

export interface FaqContent {
  badge: SectionBadge;
  title: string;
  description: string;
  items: FaqItem[];
}

export interface FaqSectionProps {
  content: FaqContent;
}
