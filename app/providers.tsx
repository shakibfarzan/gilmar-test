'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import theme from './theme';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: 'mui', stylisPlugins: [rtlPlugin] }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
