import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                sourceMap: true
            }
        }
    },
    plugins: [react()],
})
