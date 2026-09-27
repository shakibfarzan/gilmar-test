import type { IconName } from '@/components/icons';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarLogoAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavbarCta {
  label: string;
  href: string;
  icon: IconName;
}

export interface NavbarContent {
  logo: NavbarLogoAsset;
  links: NavLink[];
  cta: NavbarCta;
}

export interface NavbarProps {
  content: NavbarContent;
}

export interface NavbarLogoProps {
  logo: NavbarLogoAsset;
}

export interface NavbarLinksProps {
  links: NavLink[];
}

export interface NavbarMenuProps {
  links: NavLink[];
}

export interface NavbarCtaProps {
  cta: NavbarCta;
}
