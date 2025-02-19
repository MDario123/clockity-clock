import type { JSX } from "react";
import { useOffsetContext } from "#shared/OffsetContext";
import { Time } from "#shared/Time";

export function ManualOffsetController(): JSX.Element {
  const { manualOffset, setManualOffset } = useOffsetContext();

  const handleIncrease = () => {
    setManualOffset(manualOffset.add(new Time(0, 0, 5)));
  };

  const handleDecrease = () => {
    setManualOffset(manualOffset.add(new Time(0, 0, -5)));
  }

  return (
    <div>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
