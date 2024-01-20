import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4db6ac",
      dark: "#357f78",
      light: "#70c4bc",
      contrastText: "#00000",
    },
    secondary: {
      main: "#ba68c8",
      dark: "#82488c",
      light: "#c786d3",
      contrastText: "#000000",
    },
    background: {
      default: "#202020",
      paper: "#101010",
    },
  },
});
