// Criando uma função acessória

function toRgba(cssVariable) {
  const color = `var(${cssVariable})`;
  return ({ opacityValue }) => `rgba(${color}, ${opacityValue})`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //Screens fora do extend irá sobrescrever o padrão do tailwind

    screens: {
      mobile: "var(--screen-mobile)",
      tablet: "var(--screen-tablet)",
      desktop: "var(--screen-desktop)",
      tv: "var(--screen-mobile)",
    },

    extend: {
      //colors dentro do extend irá complementar as cores já existentes no tailwind
      colors: {
        primary: toRgba("--primary"),
        secondary: toRgba("--secondary"),
        tertiary: toRgba("--tertiary"),
        quaternary: toRgba("--quaternary"),
        hover: toRgba("--hover"),
        click: toRgba("--click"),
        icon: toRgba("--icon"),
        outline: toRgba("--outline"),
        divider: toRgba("--divider"),
        "bg-light": toRgba("--bg-light"),
        "bg-dark": toRgba("--bg-dark"),
        "bg-disabled": toRgba("--bg-disabled"),
        "text-primary": toRgba("--text-primary"),
        "text-secondary": toRgba("--text-secondary"),
        "text-tertiary": toRgba("--text-tertiary"),
        "text-disabled": toRgba("--text-disabled"),
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        focus: "var(--shadow-focus)",
        outline: "var(--shadow-outline)",
        "button-focus": "var(--shadow-button-focus)",
      },
      blur: {
        default: "var(--blur-default)",
      }
    },
  },
  plugins: [],
};
