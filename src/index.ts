import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'mohsin/nuxt-gravatar'
  },
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url))
      })
    }
  }
})

declare module '@nuxt/schema' {
  interface NuxtConfig {}
}
