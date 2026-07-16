import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Production minification (JS + CSS). esbuild is Vite’s default: fast and strong.
    minify: 'esbuild',
    cssMinify: true,
    // Smaller output for modern browsers (no legacy polyfill bloat).
    target: 'es2020',
    // Don’t ship source maps in production (keeps dist lean).
    sourcemap: false,
    // Inline only tiny assets; images/video stay as separate files.
    assetsInlineLimit: 4096,
    // Fail the build if a single chunk is suspiciously large.
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        /**
         * Split heavy deps so no single minified chunk exceeds Vite’s 500 kB warning.
         * App pages are also code-split via React.lazy in App.tsx.
         */
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom', 'scheduler'],
          'react-helmet': ['react-helmet-async'],
        },
      },
    },
  },
  esbuild: {
    // Strip debug noise from production bundles.
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
});
