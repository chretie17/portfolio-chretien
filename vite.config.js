import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Relative paths for production builds
  server: {
    watch: {
      usePolling: true, // Fixes file watcher issues
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
