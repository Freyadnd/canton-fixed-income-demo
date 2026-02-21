import { defineConfig } from 'vite'


export default defineConfig({
  optimizeDeps: {
    include: ['@daml.js/fixed-income-daml-0.0.1']
  }
})