import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import SignIn from "./pages/SignInt";
import { theme } from "./theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignIn />
    </ThemeProvider>
  );
};

export default App;
