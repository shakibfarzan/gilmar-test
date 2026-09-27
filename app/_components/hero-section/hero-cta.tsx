import { CtaButton } from '@/components/ui';
import type { HeroCtaProps } from './hero-section.types';

export default function HeroCta({ cta }: HeroCtaProps) {
  return (
    <CtaButton
      label={cta.label}
      href={cta.href}
      icon={cta.icon}
      sx={{ mt: { xs: 3.5, md: 4.5 } }}
    />
  );
}
