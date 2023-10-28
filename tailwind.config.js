/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  screens: {
    'm': '500px',
  },
  //
  extend: {
    screens: {
      'sm': '500px',
      'm': '650px',
      'lg': '950px'
    },
  },
};
export const important = true;
export const plugins = [];
