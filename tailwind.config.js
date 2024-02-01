/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //Colors fora do extend irá sobrescrever o padrão do tailwind

    extend: {
      //colors dentro do extend irá complementar as cores já existentes no tailwind
      colors: {
        primary: ({ opacityValue }) => `rgba(var(--primary), ${opacityValue})`,
        secondary: ({ opacityValue }) =>
          `rgba(var(--secondary), ${opacityValue})`,
        tertiary: ({ opacityValue }) =>
          `rgba(var(--tertiary), ${opacityValue})`,
        quaternary: ({ opacityValue }) =>
          `rgba(var(--quaternary), ${opacityValue})`,
        hover: ({ opacityValue }) => `rgba(var(--hover), ${opacityValue})`,
        click: ({ opacityValue }) => `rgba(var(--click), ${opacityValue})`,
        icon: ({ opacityValue }) => `rgba(var(--icon), ${opacityValue})`,
        outline: ({ opacityValue }) => `rgba(var(--outline), ${opacityValue})`,
        divider: ({ opacityValue }) => `rgba(var(--divider), ${opacityValue})`,
        "bg-light": ({ opacityValue }) =>
          `rgba(var(--bg-light), ${opacityValue})`,
        "bg-dark": ({ opacityValue }) =>
          `rgba(var(--bg-dark), ${opacityValue})`,
        "bg-disabled": ({ opacityValue }) =>
          `rgba(var(--bg-disabled), ${opacityValue})`,
        "text-primary": ({ opacityValue }) =>
          `rgba(var(--text-primary), ${opacityValue})`,
        "text-secondary": ({ opacityValue }) =>
          `rgba(var(--text-seconday), ${opacityValue})`,
        "text-teritiary": ({ opacityValue }) =>
          `rgba(var(--text-teritiary), ${opacityValue})`,
        "text-disabled": ({ opacityValue }) =>
          `rgba(var(--text-disabled), ${opacityValue})`,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
