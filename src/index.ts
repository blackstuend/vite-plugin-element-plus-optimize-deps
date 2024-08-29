import fs from 'node:fs/promises'
import path from 'node:path'
import type { Plugin } from 'vite'

function elementPlusOptimizeDepsPlugin(): Plugin {
  return {
    name: 'vite-plugin-element-plus-optimize-deps',
    config: async (config) => {
      const optimizeDepsElementPlusIncludes = ['element-plus/es']
      const componentsDir = path.resolve('node_modules/element-plus/es/components')

      try {
        const componentEntries = await fs.readdir(componentsDir, { withFileTypes: true })
        for (const entry of componentEntries) {
          if (entry.isDirectory()) {
            const cssPath = path.join(componentsDir, entry.name, 'style/css.mjs')
            try {
              await fs.access(cssPath)
              optimizeDepsElementPlusIncludes.push(`element-plus/es/components/${entry.name}/style/css`)
            }
            catch {
              // CSS file doesn't exist, skip
            }
          }
        }
      }
      catch (error) {
        console.error('Error reading Element Plus components directory:', error)
      }

      return {
        optimizeDeps: {
          include: [
            ...(config.optimizeDeps?.include || []),
            ...optimizeDepsElementPlusIncludes,
          ],
        },
      }
    },
  }
}

export default elementPlusOptimizeDepsPlugin
