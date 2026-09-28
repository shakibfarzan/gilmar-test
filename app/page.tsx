import { AboutUsSection, aboutUsContent } from '@/app/_components/about-us-section';
import { HeroSection, heroContent } from '@/app/_components/hero-section';
import { RulesSection, rulesContent } from '@/app/_components/rules-section';
import { ServicesSection, servicesContent } from '@/app/_components/services-section';
import { BlogsSection, blogsContent } from './_components/blogs-section';
import { CommentsSection, commentsContent } from './_components/comments-section';
import { FaqSection, faqContent } from './_components/faq-section';
import { PackagesSection, packagesContent } from './_components/packages-section';
import { ResidenceSection, residenceContent } from './_components/residence-section';
import { VideoSection, videoContent } from './_components/video-section';

export default function Home() {
  return (
    <>
      <HeroSection content={heroContent} />
      <AboutUsSection content={aboutUsContent} />
      <RulesSection content={rulesContent} />
      <ServicesSection content={servicesContent} />
      <ResidenceSection content={residenceContent} />
      <VideoSection content={videoContent} />
      <CommentsSection content={commentsContent} />
      <PackagesSection content={packagesContent} />
      <BlogsSection content={blogsContent} />
      <FaqSection content={faqContent} />
    </>
  );
}
