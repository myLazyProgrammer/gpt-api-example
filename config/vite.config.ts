import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: /\.(jsx?|tsx?|vue|svelte)$/,
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  server: {
    port: 9527,
  },
  build: {
    rollupOptions: {},
  },
});
