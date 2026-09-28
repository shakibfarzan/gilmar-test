import { SectionIntro } from '@/components/ui';
import { Box } from '@mui/material';
import Image from 'next/image';
import type { FaqContent } from './faq.types';

export default function FaqIntro({ content }: { content: FaqContent }) {
  return (
    <Box sx={{ flex: { md: '1 1 0' } }}>
      <SectionIntro
        badge={content.badge}
        title={content.title}
        titleId="faq-title"
        description={content.description}
        align="start"
        maxWidth={560}
        sx={{ color: 'inherit' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Image
          src="/faq/binaculers.png"
          alt="دوربین دوچشمی و کارت‌های سفر"
          width={420}
          height={420}
          style={{
            width: 'min(100%, 420px)',
            height: 'auto',
            zIndex: 3,
            filter: 'drop-shadow(0 8px 16px rgba(13, 116, 47, 0.3))',
          }}
        />
      </Box>
    </Box>
  );
}
