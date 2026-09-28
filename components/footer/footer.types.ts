import type { IconName } from '@/components/icons';
import type { ImageAsset } from '@/components/ui';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterBrandContent {
  logo: ImageAsset;
  description: string;
}

export interface FooterMapContent {
  image: ImageAsset;
  mask: ImageAsset;
}

export interface FooterLinksContent {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  id: string;
  label: string;
  value: string;
  href?: string;
}

export interface FooterContactContent {
  title: string;
  items: FooterContactItem[];
}

export interface FooterSocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconName;
}

export interface FooterContent {
  brand: FooterBrandContent;
  map: FooterMapContent;
  explore: FooterLinksContent;
  contact: FooterContactContent;
  socials: FooterSocialLink[];
  copyright: string;
}

export interface FooterProps {
  content: FooterContent;
}

export interface FooterBrandProps {
  brand: FooterBrandContent;
}

export interface FooterMapProps {
  map: FooterMapContent;
}

export interface FooterColumnProps {
  title: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export interface FooterListProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export interface FooterTextLinkProps {
  href: string;
  children: ReactNode;
}

export type FooterLinksProps = FooterLinksContent;

export type FooterContactProps = FooterContactContent;

export interface FooterSocialsProps {
  items: FooterSocialLink[];
}

export interface FooterBottomBarProps {
  copyright: string;
  socials: FooterSocialLink[];
}
