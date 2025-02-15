import { createTheme, ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";
import "./App.css";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher: (url) => fetch(url).then((r) => r.json()) }}>
        {/* Components here */}
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
