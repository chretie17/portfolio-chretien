import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are served relative to the site root
  build: {
    outDir: 'dist', // Specifies the build output directory
    assetsDir: 'assets', // Stores assets in an 'assets' folder
  },
});