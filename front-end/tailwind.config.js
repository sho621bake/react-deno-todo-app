// prettier-ignore
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'white': '#ffffff',
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': {
                50:'#f9fafb',
                100:'#f3f4f6',
                200:'#e5e7eb',
                300:'#d1d5db',
                400:'#9ca3af',
                500:'#6b7280',
                600:'#4b5563',
                700:'#374151',
                800:'#1f2937',
                900:'#111827'
            },
            'gray-light': '#d3dce6',
            'red': {
                50: '#fef2f2',
                100:'#fee2e2',
                200:'#fecaca',
                300:'#fca5a5',
                400:'#f87171',
                500:'#ef4444',
                600:'#dc2626',
                700:'#b91c1c',
                800:'#991b1b',
                900:'#7f1d1d'
            }
        },
    },
    plugins: [require('preline/plugin')],
}
