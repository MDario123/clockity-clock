import type { JSX } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useOffsetContext } from "#shared/OffsetContext";
import { Time } from "#shared/Time";

export function ManualOffsetController(): JSX.Element {
  const { manualOffset, setManualOffset } = useOffsetContext();

  const handleIncrease = () => {
    setManualOffset(manualOffset.add(new Time(0, 0, 5)));
  };

  const handleDecrease = () => {
    setManualOffset(manualOffset.add(new Time(0, 0, -5)));
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleDecrease}>
        Decrease
      </Button>
      <Button variant="outlined" onClick={handleIncrease}>
        Increase
      </Button>
    </Stack>
  );
}
