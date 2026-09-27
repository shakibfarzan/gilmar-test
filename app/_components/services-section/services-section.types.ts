export interface ServiceImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  href: string;
  image: ServiceImage;
}

export interface ServicesContent {
  items: ServiceItem[];
}

export interface ServicesSectionProps {
  content: ServicesContent;
}

export interface ServicesCarouselProps {
  items: ServiceItem[];
}

export interface ServiceCardProps {
  item: ServiceItem;
}
