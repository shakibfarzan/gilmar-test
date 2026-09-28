'use client';

import { Icon } from '@/components/icons';
import { Box, ButtonBase, Collapse, Typography } from '@mui/material';
import { useState } from 'react';
import type { FaqItem } from './faq.types';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? '');

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      {items.map((item) => {
        const open = item.id === openId;
        return (
          <Box
            key={item.id}
            sx={{
              borderRadius: { xs: 4, md: 5 },
              bgcolor: 'background.default',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: open ? '0 0 0 12px rgba(255,255,255,.14)' : 'none',
              p: 0.5,
            }}
          >
            <ButtonBase
              component="button"
              onClick={() => setOpenId(open ? '' : item.id)}
              aria-expanded={open}
              aria-controls={`${item.id}-answer`}
              sx={{
                width: '100%',
                minHeight: 76,
                px: 2.5,
                py: 1.5,
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                gap: 2,
                textAlign: 'left',
                bgcolor: 'background.paper',
                borderRadius: open ? '16px 16px 0 0' : 4,
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderBottom: 0,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: 14, md: 16 } }}>
                  {item.question}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                  background: (theme) =>
                    `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }}
              >
                <Icon name={open ? 'Minus' : 'Plus'} size={12} />
              </Box>
            </ButtonBase>
            <Collapse
              in={open}
              sx={{
                bgcolor: 'background.paper',
                borderRadius: '0 0 16px 16px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderTop: 0,
              }}
            >
              <Typography
                id={`${item.id}-answer`}
                sx={{
                  px: 2.5,
                  pb: 2.5,
                  lineHeight: 2,
                  color: 'text.secondary',
                  fontSize: 14,
                  textAlign: 'left',
                }}
              >
                {item.answer}
              </Typography>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
}
