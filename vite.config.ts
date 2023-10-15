import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import generouted from '@generouted/react-router/plugin';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), viteCompression()],
  resolve: { alias: { '@': '/src' } },
  build: {
    outDir: 'build',
  },
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
});
