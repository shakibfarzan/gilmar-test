import Box from '@mui/material/Box';
import FooterColumn from './footer-column';
import FooterList from './footer-list';
import FooterTextLink from './footer-text-link';
import type { FooterContactProps } from './footer.types';

const CONTACT_WIDTH = 380;

export default function FooterContact({ title, items }: FooterContactProps) {
  return (
    <FooterColumn title={title} sx={{ maxWidth: { md: CONTACT_WIDTH } }}>
      <FooterList>
        {items.map((item) => (
          <Box component="li" key={item.id}>
            {`${item.label}: `}
            {item.href ? (
              <FooterTextLink href={item.href}>{item.value}</FooterTextLink>
            ) : (
              item.value
            )}
          </Box>
        ))}
      </FooterList>
    </FooterColumn>
  );
}
