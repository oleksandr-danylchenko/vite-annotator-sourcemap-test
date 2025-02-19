import type { UserConfig } from 'vite'
import sourcemaps from 'rollup-plugin-sourcemaps2';

export default {
  server: {
    port: 5000,
    host: true
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [sourcemaps()]
    }
  }
} satisfies UserConfig
