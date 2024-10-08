import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "#EEF5FF",
        },
        blue: {
          light: "#C9E8FD",
        },
        // "zinc-200": "#e4e4e7",
      },
      height: {
        "card-25": "25rem",
        "body-90": "90vh",
      },
      width: {
        "card-45": "45rem",
      },
      backgroundImage: {
        "background-image": "url('./images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
