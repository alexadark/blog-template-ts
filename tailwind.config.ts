import type { Config } from "tailwindcss";

const light = "#E5E7EB";
const primary = "#f056c7";
const secondary = "#58e6d9";
const links = "#8b87ea";
const dark = "#141127";
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Inconsolata, monospace",
        heading: "Inconsolata, monospace",
      },
      fontWeight: {
        body: "400",
        heading: "bold",
        bold: "700",
      },
      maxWidth:{
        content: "850px"
      },
      colors: {
        dark,
        light,
        primary,
        secondary,
        links,
        outline: "rgba(255, 255, 255, 0.5)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: light,
            a: {
              color: links,
              "&:hover": {
                color: secondary,
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
} satisfies Config;
