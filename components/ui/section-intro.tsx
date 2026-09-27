import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import CtaButton from './cta-button';
import FramedIcon from './framed-icon';
import SectionDescription from './section-description';
import SectionTitle from './section-title';
import type { SectionAlign, SectionBadge, SectionCta } from './ui.types';

export interface SectionIntroProps {
  title: string;
  titleId?: string;
  description?: string;
  badge?: SectionBadge;
  cta?: SectionCta;
  align?: SectionAlign;
  maxWidth?: number;
  sx?: SxProps<Theme>;
}

/** Badge + title + description (+ optional CTA) block shared by the homepage sections. */
export default function SectionIntro({
  title,
  titleId,
  description,
  badge,
  cta,
  align = 'center',
  maxWidth,
  sx,
}: SectionIntroProps) {
  const isCentered = align === 'center';

  return (
    <Box
      sx={[
        {
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isCentered ? 'center' : { xs: 'center', md: 'flex-start' },
          textAlign: isCentered ? 'center' : { xs: 'center', md: 'start' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {badge ? <FramedIcon icon={badge.icon} /> : null}
      <SectionTitle title={title} id={titleId} maxWidth={maxWidth} />
      {description ? <SectionDescription description={description} maxWidth={maxWidth} /> : null}
      {cta ? (
        <CtaButton
          label={cta.label}
          href={cta.href}
          icon={cta.icon}
          iconCircleSize={34}
          iconSize={20}
          sx={{ mt: { xs: 3, md: 4 } }}
        />
      ) : null}
    </Box>
  );
}
