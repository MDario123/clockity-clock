import { Time } from "#shared/service";
import type { JSX } from "react";
import { useEffect, useState } from "react";

function parseTime(date: Date): Time {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

export function Clock(): JSX.Element {
  const [time, setTime] = useState(parseTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = parseTime(new Date());
      if (newTime.seconds !== time.seconds) {
        setTime(newTime);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Current time: {`${time.hour}:${time.minute}:${time.seconds}`}</div>;
}
