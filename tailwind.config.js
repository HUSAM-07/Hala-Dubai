/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other config
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground-color)',
      },
    },
  },
} 