# vite-plugin-element-plus-optimize-deps
Help you to optimize the deps of element-plus, avoid the page reload when you enter a new page.

## Use this plugin when you have this problem:
  https://github.com/vitejs/vite/issues/5419

 [vite] ✨ new dependencies optimized: element-plus/es/components/pagination/style/css
 [vite] ✨ optimized dependencies changed. reloading

## Install
```bash
npm i -D vite-plugin-element-plus-optimize-deps
pnpm add -D vite-plugin-element-plus-optimize-deps
```

## Usage

```ts
import { defineConfig } from 'vite'
import elementPlusOptimizeDepsPlugin from 'vite-plugin-element-plus-optimize-deps'

export default defineConfig({
  plugins: [
    elementPlusOptimizeDepsPlugin(),
    ...otherPlugins,
  ]
})
```
