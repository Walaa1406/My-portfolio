const c = (v) => `oklch(var(${v}) / <alpha-value>)`;

export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: c("--background"),
        foreground: c("--foreground"),
        card: c("--card"),
        primary: { DEFAULT: c("--primary"), foreground: c("--primary-foreground") },
        muted: { DEFAULT: c("--muted"), foreground: c("--muted-foreground") },
        accent: { DEFAULT: c("--accent"), foreground: c("--accent-foreground") },
        pink: { DEFAULT: c("--pink"), deep: c("--pink-deep") },
        ink: c("--ink"),
        border: c("--border"),
        ring: c("--ring"),
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -25px oklch(0.17 0.01 60 / 0.25)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        rise: "rise 300ms cubic-bezier(0.23, 1, 0.32, 1) both",
      },
    },
  },
  plugins: [],
};
