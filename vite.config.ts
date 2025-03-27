import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vite.dev/config/
export default defineConfig({
  base:'/travel_vue3',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VueSetupExtend()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
