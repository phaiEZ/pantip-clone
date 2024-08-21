import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { fontFamily: {
      sans: ['Kanit', 'sans-serif'],
    } },
  },
  plugins: [],
} satisfies Config;
