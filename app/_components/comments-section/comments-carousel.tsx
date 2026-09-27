'use client';

import Box from '@mui/material/Box';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import CommentsCard from './comments-card';
import CommentsDots from './comments-dots';
import type { CommentsCarouselProps } from './comments.types';

const DRAG_THRESHOLD = 5;

export default function CommentsCarousel({ items }: CommentsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ startX: 0, startScroll: 0, moved: 0, pointerId: -1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const updateActiveIndex = useCallback(() => {
    const el = trackRef.current;
    if (!el || !el.clientWidth) return;
    const index = Math.round(Math.abs(el.scrollLeft) / el.clientWidth);
    setActiveIndex(Math.min(items.length - 1, Math.max(0, index)));
  }, [items.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateActiveIndex, { passive: true });
    const observer = new ResizeObserver(updateActiveIndex);
    observer.observe(el);
    return () => {
      el.removeEventListener('scroll', updateActiveIndex);
      observer.disconnect();
    };
  }, [updateActiveIndex]);

  const scrollToIndex = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const sign = getComputedStyle(el).direction === 'rtl' ? -1 : 1;
    el.scrollTo({ left: sign * index * el.clientWidth, behavior: 'smooth' });
  };

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || e.pointerType !== 'mouse' || e.button !== 0 || items.length < 2) return;
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

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 680, mx: 'auto' }}>
      <Box
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onDragStart={(e) => e.preventDefault()}
        onClickCapture={handleTrackClickCapture}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: dragging ? 'none' : 'x mandatory',
          scrollBehavior: dragging ? 'auto' : 'smooth',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          cursor: dragging ? 'grabbing' : items.length > 1 ? 'grab' : 'default',
          userSelect: dragging ? 'none' : undefined,
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {items.map((item) => (
          <CommentsCard key={item.id} item={item} />
        ))}
      </Box>

      {items.length > 1 && (
        <CommentsDots count={items.length} activeIndex={activeIndex} onSelect={scrollToIndex} />
      )}
    </Box>
  );
}
