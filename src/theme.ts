import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ebe7da",
    },
    secondary: {
      main: "#ff4da6",
    },
  },
  typography: {
    fontFamily: "Helvetica Neve",
  }
});

theme = responsiveFontSizes(theme);

export default theme;