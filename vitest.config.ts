import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [Vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        deps: {
            inline: ['@nuxt/test-utils-edge'],
        },
        coverage: {
            reporter: ['text', 'html'],
        }
    },
})
