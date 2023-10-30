/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-color': '#FFF',
      'dark-color': '#333333',
      'base-trand-color': '#A59489',
      'trand-color': '#936f62',
      'bg-color': '#FBF0E5',
      'accent-color': '#EBBAA9',
      'accent-blue-color': '#3d7d72',
      'base-blue-color': '#71897d',
      'blue-bg-color': '#8BD5CB',
    },
    extend: {
      backgroundImage: {
        'banner': "url('/images/banner.png')",
        'whyUs': "url('/images/why-us.png')",
      },
      listStyleImage: {
        checkmark: 'url("/images/checkmark.svg")',
      },
    }
  },
  plugins: [],
}

