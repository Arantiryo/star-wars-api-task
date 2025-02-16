import { createTheme, ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";
import "./App.css";
import Home from "./pages/index";
import { fetcher } from "./utils/utils";

const theme = createTheme({
  palette: {
    action: {
      disabled: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <Home />
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
