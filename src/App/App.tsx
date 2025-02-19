import type { JSX } from "react";
import { Clock } from "./Clock";
import { OffsetContextProvider } from "#shared/OffsetContext";
import { ManualOffsetController } from "./ManualOffsetController";
import { TimezoneOffsetController } from "./TimezoneOffsetController";

function App(): JSX.Element {
  return (
    <div>
      <OffsetContextProvider>
        <Clock />
        <TimezoneOffsetController />
        <ManualOffsetController />
      </OffsetContextProvider>
    </div>
  );
}

export default App;
