// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Make sure "app" folder is included!
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 90%)", // 🔁 Or use: "var(--border)" if you're using CSS variables
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        // define others here if you use them (e.g., card, input, etc.)
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  darkMode: "class", // if you're using `.dark` mode
};
