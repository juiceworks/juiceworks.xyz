/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      serif: ["Libre Baskerville", "ui-serif", "Georgia"],
      mono: ["DM Mono", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      fontSize: {
        'xl': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', fontWeight: '400' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '400' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '400' }],
        '5xl': ['3rem', { lineHeight: '1', fontWeight: '400' }],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        dawn: {
          "primary": "#286983",
          "secondary": "#907aa9",
          "accent": "#ea9d34",
          "neutral": "#9893a5",
          "base-100": "#faf4ed",
          "base-200": "#fffaf3",
          "base-300": "#f2e9e1",
          "base-content": "#575279",
          "info": "#56949f",
          "success": "#56949f",
          "warning": "#d7827e",
          "error": "#b4637a",
        },
      },
      {
        moon: {
          "primary": "#3e8fb0",
          "secondary": "#c4a7e7",
          "accent": "#f6c177",
          "neutral": "#6e6a86",
          "base-100": "#232136",
          "base-200": "#2a273f",
          "base-300": "#393552",
          "base-content": "#e0def4",
          "info": "#3e8fb0",
          "success": "#3e8fb0",
          "warning": "#ea9a97",
          "error": "#eb6f92",
        },
      },
    ],
    darkTheme: "moon",
  },
}

