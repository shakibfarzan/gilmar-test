import Box from '@mui/material/Box';
import FooterColumn from './footer-column';
import FooterList from './footer-list';
import FooterTextLink from './footer-text-link';
import type { FooterLinksProps } from './footer.types';

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <FooterColumn title={title}>
      <FooterList sx={{ whiteSpace: 'nowrap' }}>
        {links.map((link) => (
          <Box
            component="li"
            key={link.href}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}
          >
            <Box
              aria-hidden
              sx={{
                width: 5,
                height: 5,
                flexShrink: 0,
                borderRadius: '50%',
                bgcolor: 'currentColor',
              }}
            />
            <FooterTextLink href={link.href}>{link.label}</FooterTextLink>
          </Box>
        ))}
      </FooterList>
    </FooterColumn>
  );
}
