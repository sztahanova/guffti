import { ThemeType } from "grommet";

export const gufftiTheme: ThemeType = {
  global: {
    colors: {
      brand: "#0071aa",
      "accent-1": "#1081c4",
      "accent-2": "#47a9de",
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#111111",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: {
        dark: "#1081c4",
        light: "#47a9de",
      },
      control: "brand",
      "active-background": "background",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning",
      focus: "#6dc5f0",
    },
    font: {
      family: "Baloo 2, cursive",
    },
  },
  button: {
    style: {
      fontWeight: "semibold",
    },
  },
};
