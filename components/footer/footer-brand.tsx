import { SectionDescription } from '@/components/ui';
import Box from '@mui/material/Box';
import Image from 'next/image';
import type { FooterBrandProps } from './footer.types';

const BRAND_WIDTH = 320;

export default function FooterBrand({ brand }: FooterBrandProps) {
  return (
    <Box sx={{ maxWidth: { md: BRAND_WIDTH } }}>
      <Image
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        style={{ display: 'block', height: 'auto' }}
      />
      <SectionDescription
        description={brand.description}
        maxWidth={BRAND_WIDTH}
        sx={{ mt: { xs: 1, md: 0 }, textAlign: 'justify' }}
      />
    </Box>
  );
}
