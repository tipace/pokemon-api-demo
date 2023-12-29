import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import components from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';
import { VarletUIResolver } from 'unplugin-vue-components/resolvers';

const myPlugin = (options: any = {}) => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      console.log(
        req.url,
        req.method
        // req.rawHeaders,
        // req._parsedUrl
        // req
      );
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          'var-image': ['src'],
        },
      },
    }),
    components({
      resolvers: [VarletUIResolver()],
    }),
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })],
    }),
    myPlugin({ dir: 'mock' }),
  ],

  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://pokeapi.co',
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
