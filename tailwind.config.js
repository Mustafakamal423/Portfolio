
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(250, 47%, 60%)",
        "primary-foreground": "hsl(210, 40%, 98%)",
        secondary: "hsl(214, 32%, 91%)",
        foreground: "hsl(222, 47%, 11%)",
        card: "hsl(0, 0%, 100%)",
        "muted-foreground": "hsl(214, 32%, 50%)", // example
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in forwards",
        "fade-in-delay-1": "fadeIn 1s ease-in forwards 0.5s",
        "fade-in-delay-2": "fadeIn 1s ease-in forwards 1s",
        "fade-in-delay-3": "fadeIn 1s ease-in forwards 1.5s",
        "fade-in-delay-4": "fadeIn 1s ease-in forwards 2s",
        meteor: "meteor 4s linear infinite",
        "pulse-subtle": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        meteor: {
          "0%": { transform: "translateX(0) translateY(0)", opacity: 1 },
          "100%": {
            transform: "translateX(400px) translateY(200px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};