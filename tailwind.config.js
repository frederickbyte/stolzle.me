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
        pastelPurple: 'rgb(195, 177, 225, 1)',
        pastelYellow: 'rgba(242, 227, 155, 1)',
        pastelYellowHover: 'rgba(242, 227, 155, 0.8)',
      },
      fontFamily: {
        mono: ['var(--font-robotoMono)', 'monospace'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
