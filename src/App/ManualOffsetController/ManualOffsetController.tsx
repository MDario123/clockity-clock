import type { JSX } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useOffsetContext } from "#shared/OffsetContext";
import { Time } from "#shared/Time";
import { Box } from "@mui/material";

export function ManualOffsetController(): JSX.Element {
  const { manualOffset, setManualOffset } = useOffsetContext();

  const handleOffset = (hour: number, minute: number, second: number) => () => {
    setManualOffset(new Time(hour, minute, second).add(manualOffset));
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        alignItems: "center",
      }}
    >
      <Stack spacing={1} direction="row">
        <Button variant="outlined" onClick={handleOffset(-1, 0, 0)}>
          ---
        </Button>
        <Button variant="outlined" onClick={handleOffset(0, -1, 0)}>
          --
        </Button>
        <Button variant="outlined" onClick={handleOffset(0, 0, -5)}>
          -
        </Button>
      </Stack>
      <Box>{manualOffset.toLabel()}</Box>
      <Stack spacing={1} direction="row">
        <Button variant="outlined" onClick={handleOffset(0, 0, 5)}>
          +
        </Button>
        <Button variant="outlined" onClick={handleOffset(0, 1, 0)}>
          ++
        </Button>
        <Button variant="outlined" onClick={handleOffset(1, 0, 0)}>
          +++
        </Button>
      </Stack>
    </Stack>
  );
}
