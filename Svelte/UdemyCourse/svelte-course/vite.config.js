import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  // modify by adding rollup options 
  // change entry point to any filename you want 
  /*build:{
    rollupOptions:{
      input:"src/m.js",
    },
  },*/
  plugins: [svelte()],
})
