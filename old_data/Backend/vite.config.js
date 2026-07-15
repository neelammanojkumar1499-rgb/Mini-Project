import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for the Medical Virtual Assistant React frontend
// The Vite root stays as Backend/ (index.html is in Backend/)
// src/ is at Backend/src/ — we replaced those files with the real app
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
    },
})
