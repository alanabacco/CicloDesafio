import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00796b",
      dark: "#00544a",
      light: "#339388",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7b1fa2",
      dark: "#561571",
      light: "#954bb4",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
  },
});
