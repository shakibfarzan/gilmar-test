'use client';

import { Icon } from '@/components/icons';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import ServiceCard from './service-card';
import type { ServicesCarouselProps } from './services-section.types';

const BUTTON_IMAGE =
  'linear-gradient(229.52deg, var(--mui-palette-primary-main) -18.98%, var(--mui-palette-secondary-main) 121.29%)';
const DRAG_THRESHOLD = 5;

export default function ServicesCarousel({ items }: ServicesCarouselProps) {
  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ startX: 0, startScroll: 0, moved: 0, pointerId: -1 });
  const [scrollable, setScrollable] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const distance = Math.abs(el.scrollLeft);
    setScrollable(max > 4);
    setAtStart(distance <= 4);
    setAtEnd(distance >= max - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener('scroll', updateEdges, { passive: true });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      observer.disconnect();
      window.removeEventListener('resize', updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (direction: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;
    const step = (card?.offsetWidth ?? el.clientWidth) + gap;
    const sign = styles.direction === 'rtl' ? -1 : 1;
    el.scrollBy({ left: (direction === 'next' ? sign : -sign) * step, behavior: 'smooth' });
  };

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || e.pointerType !== 'mouse' || e.button !== 0 || !scrollable) return;
    dragRef.current = {
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: 0,
      pointerId: e.pointerId,
    };
    setDragging(true);
  };

  useEffect(() => {
    if (!dragging) return;
    const handleMove = (e: PointerEvent) => {
      const el = trackRef.current;
      if (!el || e.pointerId !== dragRef.current.pointerId) return;
      const dx = e.clientX - dragRef.current.startX;
      dragRef.current.moved = Math.max(dragRef.current.moved, Math.abs(dx));
      el.scrollLeft = dragRef.current.startScroll - dx;
    };
    const handleEnd = () => setDragging(false);
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleEnd);
    window.addEventListener('pointercancel', handleEnd);
    window.addEventListener('blur', handleEnd);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleEnd);
      window.removeEventListener('pointercancel', handleEnd);
      window.removeEventListener('blur', handleEnd);
    };
  }, [dragging]);

  const handleTrackClickCapture = (e: ReactMouseEvent) => {
    if (dragRef.current.moved > DRAG_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
    }
    dragRef.current.moved = 0;
  };

  const mode: 'prev' | 'next' = atEnd ? 'prev' : 'next';
  const flipArrow = isRtl !== (mode === 'prev');

  const navButtonSx = {
    position: 'absolute',
    top: '50%',
    zIndex: 1,
    width: { xs: 30, md: 40 },
    height: { xs: 30, md: 40 },
    color: 'common.white',
    border: '2px solid white',
    backgroundImage: BUTTON_IMAGE,
    boxShadow: '0px 1px 0px 0px #FFFFFF29 inset, 0px 8px 20px -10px rgb(0 0 0 / 0.6)',
    transform: 'translateY(-50%)',
    transition: 'transform 0.2s ease, filter 0.2s ease, opacity 0.2s ease',
    '&:not(.Mui-disabled):hover': {
      transform: 'translateY(-50%) scale(1.06)',
      filter: 'brightness(1.07)',
    },
    '&.Mui-disabled': { opacity: 0.45, color: 'common.white' },
  } as const;

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onDragStart={(e) => e.preventDefault()}
        onClickCapture={handleTrackClickCapture}
        sx={{
          display: 'flex',
          gap: { xs: 2, md: 3 },
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: dragging ? 'none' : 'x mandatory',
          scrollBehavior: dragging ? 'auto' : 'smooth',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          cursor: dragging ? 'grabbing' : scrollable ? 'grab' : 'default',
          userSelect: dragging ? 'none' : undefined,
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {items.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </Box>

      {scrollable && (
        <IconButton
          aria-label={mode === 'next' ? 'بعدی' : 'قبلی'}
          disabled={mode === 'prev' && atStart}
          onClick={() => scrollByCard(mode)}
          sx={{ ...navButtonSx, insetInlineStart: { xs: -14, md: -22 } }}
        >
          <Box
            component="span"
            aria-hidden="true"
            sx={{ display: 'inline-flex', mt: 0.4, transform: flipArrow ? 'scaleX(-1)' : 'none' }}
          >
            <Icon name="Arrow2" size={24} />
          </Box>
        </IconButton>
      )}
    </Box>
  );
}
