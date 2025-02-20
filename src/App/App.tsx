import type { JSX } from "react";
import { Clock } from "./Clock";
import { OffsetContextProvider } from "#shared/OffsetContext";
import { ManualOffsetController } from "./ManualOffsetController";
import { TimezoneOffsetController } from "./TimezoneOffsetController";
import { Stack } from "@mui/material";
import { MyThemeProvider } from "#design";

function App(): JSX.Element {
  return (
    <MyThemeProvider>
      <Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>
        <OffsetContextProvider>
          <Clock />
          <TimezoneOffsetController />
          <ManualOffsetController />
        </OffsetContextProvider>
      </Stack>
    </MyThemeProvider>
  );
}

export default App;
