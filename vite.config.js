import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import dotenvExpand from 'dotenv-expand'
import { loadEnv, defineConfig } from 'vite'

/** @type {import('vite').UserConfig} */

// Hack for getting vite to work with vercel postgres, documentation here:
// https://github.com/vercel/storage/tree/main/packages/postgres#a-note-for-vite-users
export default defineConfig(({ mode }) => {
    // This check is important!
    if (mode === 'development') {
        const env = loadEnv(mode, process.cwd(), '')
        dotenvExpand.expand({ parsed: env })
    }

    return {
        plugins: [enhancedImages(), sveltekit()],
        assetsInclude: ['**/*.glb'],
    }
})
