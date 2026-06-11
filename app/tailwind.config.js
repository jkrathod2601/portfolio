/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'helvetica'],
        mono: ['JetBrains Mono', 'SF Mono', 'menlo', 'monospace'],
      },
      fontSize: {
        'display-xl': ['86px', { lineHeight: '1', letterSpacing: '-1.72px', fontWeight: 340 }],
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.96px', fontWeight: 340 }],
        'headline': ['26px', { lineHeight: '1.35', letterSpacing: '-0.26px', fontWeight: 540 }],
        'subhead': ['26px', { lineHeight: '1.35', letterSpacing: '-0.26px', fontWeight: 340 }],
        'card-title': ['24px', { lineHeight: '1.45', letterSpacing: '0', fontWeight: 700 }],
        'body-lg': ['20px', { lineHeight: '1.4', letterSpacing: '-0.14px', fontWeight: 330 }],
        'body': ['18px', { lineHeight: '1.45', letterSpacing: '-0.26px', fontWeight: 320 }],
        'body-sm': ['16px', { lineHeight: '1.45', letterSpacing: '-0.14px', fontWeight: 330 }],
        'link': ['20px', { lineHeight: '1.4', letterSpacing: '-0.1px', fontWeight: 480 }],
        'button': ['20px', { lineHeight: '1.4', letterSpacing: '-0.1px', fontWeight: 480 }],
        'eyebrow': ['18px', { lineHeight: '1.3', letterSpacing: '0.54px', fontWeight: 400 }],
        'caption': ['12px', { lineHeight: '1', letterSpacing: '0.6px', fontWeight: 400 }],
      },
      colors: {
        ink: '#000000',
        'inverse-ink': '#ffffff',
        canvas: '#ffffff',
        'inverse-canvas': '#000000',
        'surface-soft': '#f5f5f5',
        hairline: '#e5e5e5',
        'hairline-soft': '#f0f0f0',
        'block-lime': '#eaf6e8',
        'block-lilac': '#f0edff',
        'block-cream': '#fdf6e3',
        'block-mint': '#e0f5ec',
        'block-pink': '#fce4ec',
        'block-coral': '#ffe4d6',
        'block-navy': '#1a2233',
        'accent-magenta': '#ff3366',
        'semantic-success': '#00a86b',
        'on-inverse-soft': 'rgba(255,255,255,0.16)',
      },
      borderRadius: {
        'pill': '50px',
      },
      spacing: {
        'section': '96px',
      },

    },
  },
  plugins: [],
}
