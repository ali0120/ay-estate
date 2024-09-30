import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        YellowGreen: "#B7E08A",
        ForestGreen:"#1D9E34",
        Menthol: "#CFECA8",
        PaleSpringBud: "#E0F5BD",
        RomanSilver: "#7F879E ",
        CadetGrey: "#9BA6B9",
        Independence: "#534F69",
        LavenderGray: "#BCC5D4",
        Vodka: "#C7C1EA",
        BrightGray: "#E4E9EE",
        Vermilion: "#E04124",
        LightSalmon: "#F59A74",
        White: "#ffffff ",
        Black: "#000000",
        ChineseBlack: "#111111",
        SmokyBlack: "#0B0F0E",
        EerieBlack: "#16112F",
        DarkJungleGreen: "#1D2322",
        DarkJungleGreentwo: "#1B2124",
        YankeesBlue: "#252A3F",
        Jet: "#313736",
        AntiFlashWhite: "#F1F1F1",
        Seashell: "#FFEEEE",
        Cultured: "#F6F3F3 ",
        GhostWhite: "#F9F9F9",
        RoyalBlue: "#3860E2",
      },
      fontFamily: {
        playball: ["Playball", "sans-serif"],
        robotoRegular: ["RobotoRegular", "sans-serif"],
        jakartaMedium: ["JakartaMedium", "sans-serif"],
        jakartaSemiBold: ["JakartaSemiBold", "sans-serif"],
        soraBold: ["Bold", "sans-serif"],
        soraMedium: ["Medium", "sans-serif"],
        soraRegular: ["Regular", "sans-serif"],
        soraSemiBold: ["SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
