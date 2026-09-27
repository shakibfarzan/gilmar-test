import { IconPill, Layer } from '@/components/ui';
import type { AboutUsHighlightProps } from './about-us.types';

export default function AboutUsHighlight({
  label,
  icon,
  iconTone,
  position,
}: AboutUsHighlightProps) {
  return (
    <Layer position={position}>
      <IconPill label={label} icon={icon} iconTone={iconTone} />
    </Layer>
  );
}
