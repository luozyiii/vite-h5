import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import pxToViewport from 'postcss-px-to-viewport';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    plugins: [react()],
    css: {
      postcss: {
        plugins: [
          pxToViewport({
            viewportWidth: 375,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore'],
            minPixelValue: 1,
            mediaQuery: false,
            // 【注意】样式的适配在组件层不做，在工程做
            exclude: /node_modules\/(?!@leslies\/rc-component)/,
          }),
          autoprefixer(),
        ],
      },
    },
  };
});
