import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/SY/', // Set this to your GitHub repository name
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
});
