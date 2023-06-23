import { defineConfig } from 'vite'
import AlpineVitePlugin from './alpine-vite-plugin.js'

export default defineConfig({
    plugins: [
        AlpineVitePlugin()
    ]
})