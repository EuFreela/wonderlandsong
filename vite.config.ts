import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        /**
         * Split heavy deps so no single minified chunk exceeds Vite’s 500 kB warning.
         * App pages are also code-split via React.lazy in App.tsx.
         */
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom', 'scheduler'],
          'framer-motion': ['framer-motion'],
          'react-helmet': ['react-helmet-async'],
        },
      },
    },
  },
});
