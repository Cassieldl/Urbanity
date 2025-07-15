import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: process.env.NODE_ENV === 'development' ? {
    proxy: {
      '/api': {
        target: 'https://urbanity-production.up.railway.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  } : undefined,
});