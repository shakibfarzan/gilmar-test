import Box from '@mui/material/Box';

/** Dashed wave connecting the three rule cards (desktop only). */
export default function RulesPath() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        insetInline: '12%',
        top: '38%',
        height: 120,
        display: { xs: 'none', md: 'block' },
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        sx={{ width: '100%', height: '100%' }}
      >
        <path
          d="M0 20 C 140 120, 250 120, 390 40 C 480 -12, 560 -12, 640 44 C 760 128, 870 128, 1000 34"
          fill="none"
          stroke="rgba(9, 47, 39, 0.1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
        />
      </Box>
    </Box>
  );
}
