import { createTheme, ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";
import "./App.css";
import Home from "./pages/index";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher: (url) => fetch(url).then((r) => r.json()) }}>
        <Home />
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
