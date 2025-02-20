import type { JSX } from "react";
import { Clock } from "./Clock";
import { OffsetContextProvider } from "#shared/OffsetContext";
import { ManualOffsetController } from "./ManualOffsetController";
import { TimezoneOffsetController } from "./TimezoneOffsetController";
import { Stack } from "@mui/material";

function App(): JSX.Element {
  return (
    <Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>
      <OffsetContextProvider>
        <Clock />
        <TimezoneOffsetController />
        <ManualOffsetController />
      </OffsetContextProvider>
    </Stack>
  );
}

export default App;
