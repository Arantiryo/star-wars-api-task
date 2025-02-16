import { createTheme, ThemeProvider } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { fetcher } from "../utils/utils";
import { SWRConfig } from "swr";

const theme = createTheme({
  palette: {
    mode: "dark",
    action: {
      disabled: "#ffffff",
    },
  },
});

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <Outlet />
      </SWRConfig>
    </ThemeProvider>
  ),
});
