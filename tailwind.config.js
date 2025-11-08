export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kettera-blue': '#0A5BD3',
        'kettera-navy': '#0B1D3A',
        'kettera-bg': '#ffffff',
        'kettera-ink': '#0f172a',
        'kettera-muted': '#64748b',
        'kettera-line': '#eef0f3',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fadein-scale': 'fadein-scale 1.2s cubic-bezier(0.39, 0.58, 0.57, 1) 0.2s forwards'
      },
      keyframes: {
        'fadein-scale': {
          '0%': { opacity: 0, transform: 'scaleX(0)' },
          '60%': { opacity: 0.7, transform: 'scaleX(1)' },
          '100%': { opacity: 1, transform: 'scaleX(1.02)' }
        }
      }
    },
  },
  plugins: [],
}
