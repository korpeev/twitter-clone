//@ts-nocheck
import { createTheme } from "@mui/material/styles";
import { red, grey, green } from "@mui/material/colors";
export const theme = createTheme({
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Ubuntu",
      "Helvetica Neue",
      "sans-serif",
    ],
  },
  palette: {
    primary: {
      main: "rgb(29, 161, 242)",
      dark: "rgb(26, 145, 218)",
      light: "rgba(29, 155, 240, .1)",
      contrastText: "#fff",
    },
    grey: grey[400],
    green: {
      main: green[300],
    },
    secondary: {
      main: "rgb(26, 145, 218)",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  shadows: [],
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            borderRadius: "30px",
          },
          padding: "10px 10px",
          borderRadius: "30px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: ".5rem 0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
        },
      },
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});
