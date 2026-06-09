import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#faf7f2",
        accent: "#ef6b3d",
        sand: "#f0e7d8",
        sage: "#d7e0d0"
      },
      boxShadow: {
        card: "0 16px 40px rgba(17, 17, 17, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
