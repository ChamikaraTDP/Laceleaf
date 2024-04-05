import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-default': "var(--bg-default)",
        'bg-sidebar': "var(--bg-sidebar)",
        'txt-hover': "var(--txt-hover)",
        'bg-shop-title': "var(--bg-shop-title)",
        'bg-shop-price': "var(--bg-shop-price)",
        'bg-in-stock': "var(--bg-in-stock)",
        'btn-primary': "var(--btn-primary)",
      }
    },
  },
  plugins: [],
}
export default config;
