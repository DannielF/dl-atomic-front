/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTest.ts'
  },
  plugins: [react()],
  envDir: './environments',
  appType: 'spa'
});
