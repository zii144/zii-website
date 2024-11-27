import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Primary highlight color
    },
    text: {
      primary: "#ffffff", // Text color
      secondary: "rgba(255, 255, 255, 0.7)", // Secondary text color
    },
  },
});

export default theme;
