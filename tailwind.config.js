/** @type {import('tailwindcss').Config} */

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'black', 'white', 'gray', 'orange'];
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    safelist: [
        ...colors.flatMap(color => shades.map(shade => `text-${color}-${shade}`)),
        ...colors.flatMap(color => shades.map(shade => `bg-${color}-${shade}`)),
        ...colors.flatMap(color => shades.map(shade => `border-${color}-${shade}`)),
    ],

    theme: {
        extend: {
        colors: {
            'old-glory-blue': '#0A3161',
            'old-glory-red': '#B31942',
        },
        },
    },

    content: ['./src/**/*.{html,js,svelte,ts}'],

    plugins: [],
};