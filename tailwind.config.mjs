import animations1 from '@midudev/tailwind-animations'
import animations from 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
    content:['./src/**/*.{astro,html,js.jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/tw-elements/js/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        animations1,
        animations,
        require("tw-elements/plugin.cjs"),
        
    ],
    darkMode: "class"
}