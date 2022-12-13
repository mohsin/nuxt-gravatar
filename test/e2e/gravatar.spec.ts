import { fileURLToPath } from 'url'
import { $fetch, setup } from '@nuxt/test-utils'
import { describe, expect, it } from 'vitest'

const playground = fileURLToPath(new URL('../../playground', import.meta.url))

await setup({
  rootDir: playground,
  server: true,
  browser: true,
})

describe('module', () => {
  it('should render the gravatar', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<img src="https://gravatar.com/avatar/65680ec6a2af011c76130772fd65a32c?d=retro" alt="Avatar">')
  }, 50000)
})
