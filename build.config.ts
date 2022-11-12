import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    { input: 'src/index', format: 'esm' },
    { input: 'src/components/', outDir: 'dist/components' }
  ],
  rollup: {
    inlineDependencies: true
  },
  externals: [
    '@nuxt/schema'
  ]
})
