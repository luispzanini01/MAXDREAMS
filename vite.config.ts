import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Usar './' permite que o build funcione em subpastas como usuario.github.io/repo/
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});