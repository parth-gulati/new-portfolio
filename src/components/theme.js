import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    black: {
      main: "#000",
    },
    primary: {
      main: "#0ca48b",
    },
    secondary: {
      main: "#97BC62",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 12,
    h6: {
      fontFamily: "Roboto",
      fontSize: 15,
    },
  },
});
