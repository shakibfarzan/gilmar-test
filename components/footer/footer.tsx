import { Section } from '@/components/ui';
import Box from '@mui/material/Box';
import FooterBottomBar from './footer-bottom-bar';
import FooterBrand from './footer-brand';
import FooterContact from './footer-contact';
import FooterLinks from './footer-links';
import FooterMap from './footer-map';
import type { FooterProps } from './footer.types';

export default function Footer({ content }: FooterProps) {
  return (
    <Section
      component="footer"
      sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 5 } }}
      containerSx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          px: { xs: 2.5, md: 3 },
          py: { xs: 4, md: 6 },
          bgcolor: 'background.default',
          borderRadius: 5,
          border: '4px solid white',
        }}
      >
        <FooterMap map={content.map} />

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 5, lg: 9 },
          }}
        >
          <FooterBrand brand={content.brand} />
          <FooterLinks title={content.explore.title} links={content.explore.links} />
          <FooterContact title={content.contact.title} items={content.contact.items} />
        </Box>
      </Box>

      <FooterBottomBar copyright={content.copyright} socials={content.socials} />
    </Section>
  );
}
