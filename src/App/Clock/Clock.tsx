import type { JSX } from "react";
import { useEffect, useState } from "react";
import { useOffsetContext } from "#shared/OffsetContext";
import { Time } from "#shared/Time";
import { Typography } from "@mui/material";

export function Clock(): JSX.Element {
  const [currTime, setTime] = useState(Time.fromDate(new Date()));
  const { manualOffset, timezoneOffset } = useOffsetContext();

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = Time.fromDate(new Date());
      if (newTime.seconds !== currTime.seconds) {
        setTime(newTime);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [currTime.seconds]);

  const time = currTime.add(manualOffset).add(timezoneOffset);

  return <Typography variant="h1">{time.toLabel()}</Typography>;
}
