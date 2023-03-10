/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        defaultText: '#252525',
        pastelBlue: 'rgba(83,143,247, 0.6)',
        pastelBlueHover: 'rgba(83,143,247, 0.4)',
        pastelGrey: 'rgba(202, 210, 212, 1)',
        pastelGreyHover: 'rgba(202, 210, 212, 0.8)',
        pastelPurple: 'rgb(195, 177, 225, 1)',
        pastelYellow: 'rgba(242, 227, 155, 1)',
        pastelYellowHover: 'rgba(242, 227, 155, 0.8)',
      },
      fontFamily: {
        mono: ['var(--font-robotoMono)', 'monospace'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
}
