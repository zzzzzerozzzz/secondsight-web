/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-blue': '#1E3A8A',   // Guangzhou - professionalism
                'brand-red': '#DC2626',    // Hong Kong - vitality
                'brand-gold': '#D4AF37',   // Premium accent
                'brand-bg': '#F8FAFC',
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
