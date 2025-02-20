import type { JSX } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useOffsetContext } from "#shared/OffsetContext";
import { getPossibleTimezones, getTimeOffsetByTimezone } from "#shared/service";

export function TimezoneOffsetController(): JSX.Element {
  const [timezone, setTimezone] = useState("UTC");
  const [possibleTimezones, setPossibleTimezones] = useState<string[]>(["UTC"]);
  const { setTimezoneOffset } = useOffsetContext();

  // Fetch possible timezones on first render
  useEffect(() => {
    (() => {
      getPossibleTimezones()
        .then((timezones) => {
          setPossibleTimezones(timezones);
        })
        .catch((error: unknown) => {
          // TODO: Proper error handling should be implemented here
          console.error(error);
        });
    })();
  }, []);

  // Every 10 seconds, or when the timezone changes, we update the offset
  useEffect(() => {
    const interval = setInterval(() => {
      getTimeOffsetByTimezone(timezone)
        .then((time) => {
          setTimezoneOffset(time);
        })
        .catch((error: unknown) => {
          // TODO: Proper error handling should be implemented here
          console.error(error);
        });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [timezone, setTimezoneOffset]);

  return (
    <Box sx={{ minWidth: 200, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="timezone-select-label">Timezone</InputLabel>
        <Select
          labelId="timezone-select-label"
          id="timezone-select"
          value={timezone}
          label="Timezone"
          onChange={(event) => setTimezone(event.target.value)}
        >
          {possibleTimezones.map((tz) => (
            <MenuItem key={tz} value={tz}>
              {tz}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
