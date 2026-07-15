/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./index.html",
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#1a56db',
                'primary-teal': '#0694a2',
                'soft-blue': '#e8f0fe',
                'soft-teal': '#d0f4f6',
                'background': '#f7fafc',
            },
            borderRadius: {
                'card': '1rem',
            },
            boxShadow: {
                'card': '0 2px 16px 0 rgba(26,86,219,0.08)',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
