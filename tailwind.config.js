/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        extend: {
            colors: {
                dark: '#22242A',
                background: '#f8f9fb',
                granite: '#808080',
                denim: '#39628D',
                rhino: '#354069',
                platinum: '#E2E2E2',
                employee: '#E17878',
                stakeholder: '#8A98CA',
                guest: '#F2AC57',
                supervisor: '#B9E5E5',
                'checkbox-no': '#d8d8d8',
                'checkbox-yes': '#39628D',
            },
        },
    },
    plugins: [],
};
