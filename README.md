# vite-h5

### 私有库安装

```bash
npm cache clean --force

npm install @leslies/rc-component@0.0.1 --registry http://81.71.98.176:4873:4873
```

### 移动自适应方案（px => vw）

#### 安装

```bash
npm install postcss postcss-px-to-viewport autoprefixer -D
```

#### 配置 vite.config.ts

```js
import autoprefixer from 'autoprefixer';
import pxToViewport from 'postcss-px-to-viewport';

{
  ...,
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
}
```
