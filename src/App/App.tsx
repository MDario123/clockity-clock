import type { JSX } from "react";
import { Clock } from "./Clock";
import { OffsetContextProvider } from "#shared/OffsetContext";

function App(): JSX.Element {
  return (
    <div>
      <OffsetContextProvider>
        <Clock />
      </OffsetContextProvider>
    </div>
  );
}

export default App;
