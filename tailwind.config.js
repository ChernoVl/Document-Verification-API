module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Example primary color
        "primary-foreground": "#FFFFFF",
        background: "#F9FAFB",
        muted: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
