import type { JSX } from "react";
import { Clock } from "./Clock";
import { OffsetContextProvider } from "#shared/OffsetContext";
import { ManualOffsetController } from "./ManualOffsetController";

function App(): JSX.Element {
  return (
    <div>
      <OffsetContextProvider>
        <Clock />
        <ManualOffsetController />
      </OffsetContextProvider>
    </div>
  );
}

export default App;
