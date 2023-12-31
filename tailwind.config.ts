import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        round: '0 0 35px 1px',
      },
      colors: {
        primary: {
          'light-cyan': 'hsl(193, 38%, 86%)',
          'neon-green': 'hsl(150, 100%, 66%)',
        },
        neutral: {
          'grayish-blue': 'hsl(217, 19%, 38%)',
          'dark-grayish-blue': 'hsl(217, 19%, 24%)',
          'dark-blue': 'hsl(218, 23%, 16%)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
