// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure this is pointing to the correct directory
  build: {
    outDir: 'dist', // Ensure this matches your output directory
  },
});
