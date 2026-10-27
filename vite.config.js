import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
   optimizeDeps: {
    include: ['@react-pdf/renderer', 'pako'],
  },
  base: '/quoa/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});

// https://vitejs.dev
// export default defineConfig({
//   base: '/', // 👈 أضف هذا السطر تحديداً (اسم المستودع بين slash)
//   plugins: [react()],
 
//   build: {
//     commonjsOptions: {
//       include: [/node_modules/],
//     },
//   },
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

