import { useOffsetContext } from "#shared/OffsetContext";
import { Time } from "#shared/Time";
import type { JSX } from "react";
import { useEffect, useState } from "react";

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

  return (
    <div>
      Current time:{" "}
      {`${String(time.hour)}:${String(time.minute)}:${String(time.seconds)}`}
    </div>
  );
}
