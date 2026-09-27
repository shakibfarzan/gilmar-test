import { AboutUsSection, aboutUsContent } from '@/app/_components/about-us';
import { HeroSection, heroContent } from '@/app/_components/hero-section';
import { RulesSection, rulesContent } from '@/app/_components/rules';
import { ServicesSection, servicesContent } from '@/app/_components/services-section';

export default function Home() {
  return (
    <>
      <HeroSection content={heroContent} />
      <AboutUsSection content={aboutUsContent} />
      <RulesSection content={rulesContent} />
      <ServicesSection content={servicesContent} />
    </>
  );
}
