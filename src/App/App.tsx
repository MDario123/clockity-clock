import type { JSX } from "react";
import { Clock } from "./Clock";
import { OffsetContextProvider } from "#shared/OffsetContext";
import { ManualOffsetController } from "./ManualOffsetController";
import { TimezoneOffsetController } from "./TimezoneOffsetController";
import { Stack } from "@mui/material";
import { MyThemeProvider } from "#design";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <MyThemeProvider>
        <Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>
          <OffsetContextProvider>
            <Clock />
            <TimezoneOffsetController />
            <ManualOffsetController />
          </OffsetContextProvider>
        </Stack>
      </MyThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
