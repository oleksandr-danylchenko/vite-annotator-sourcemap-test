import type { UserConfig } from 'vite'

export default {
  server: {
    port: 5000,
    host: true
  },
  build: {
    sourcemap: true
  }
} satisfies UserConfig
