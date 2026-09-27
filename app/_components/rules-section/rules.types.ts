import type { IconName } from '@/components/icons';
import type { ImageAsset, LayerPosition } from '@/components/ui';

export interface RulesBadgeContent {
  icon: IconName;
}

export interface RulesCardContent {
  id: string;
  title: string;
  description: string;
  image: ImageAsset;
  offset?: number;
  rotationDegree: number;
}

export interface RulesConfettiContent {
  id: string;
  color: string;
  size: number;
  rotate: number;
  position: LayerPosition;
}

export interface RulesContent {
  badge: RulesBadgeContent;
  title: string;
  description: string;
  cards: RulesCardContent[];
  confetti: RulesConfettiContent[];
}

export interface RulesSectionProps {
  content: RulesContent;
}

export interface RulesIntroProps {
  badge: RulesBadgeContent;
  title: string;
  description: string;
}

export interface RulesTitleProps {
  title: string;
  id?: string;
}

export interface RulesDescriptionProps {
  description: string;
}

export interface RulesCardsProps {
  cards: RulesCardContent[];
}

export type RulesCardProps = Omit<RulesCardContent, 'id'>;

export interface RulesCardMediaProps {
  image: ImageAsset;
  rotationDegree: number;
}

export interface RulesConfettiProps {
  confetti: RulesConfettiContent[];
}
