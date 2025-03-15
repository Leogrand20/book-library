import { defineConfig } from 'vite'
import { resolve } from 'path'
import Inspect from 'vite-plugin-inspect'
import legacy from 'vite-plugin-legacy-swc'
import htmlTemplate from 'vite-plugin-html-template-mpa'
import copy from 'vite-plugin-cp'
import zipPack from 'unplugin-zip-pack/vite'
import react from '@vitejs/plugin-react'

const chunkSize = 1024

const copyTarget = {
  // targets: [{ src: './src/assets/video', dest: 'dist/assets/video' }],
}

const alias = {
  '@': resolve(__dirname, 'src'),
  '@css': resolve(__dirname, 'src/styles'),
  '@icons': resolve(__dirname, 'src/assets/icons'),
  '@img': resolve(__dirname, 'src/assets/img'),
  '@fonts': resolve(__dirname, 'src/assets/fonts'),
}

const extensions = ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      build: {
        chunkSizeWarningLimit: chunkSize,

        manifest: true,
      },

      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `$injectedColor: orange;`,

            api: 'modern-compiler',
          },
        },
      },

      preview: {
        port: 4000,
      },

      plugins: [
        copy(copyTarget),

        legacy({
          targets: ['>0.3%', 'defaults', 'last 100 versions', 'not dead'],
        }),

        htmlTemplate({
          minify: true,
        }),

        zipPack({
          in: './dist',

          out: 'dist.zip',

          filter: true,
        }),

        
        react(),
      ],

      resolve: {
        alias,
        extensions,
      },
    }
  } else {
    return {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `$injectedColor: orange;`,

            api: 'modern-compiler',
          },
        },

        devSourcemap: true,
      },

      server: {
        port: 8000,
        open: true,
      },

      build: {
        sourcemap: 'inline',

        minify: false,

        write: false,

        chunkSizeWarningLimit: chunkSize,

        watch: {},
      },

      plugins: [Inspect(), copy(copyTarget), react()],

      resolve: {
        alias,
        extensions,
      },
    }
  }
})
