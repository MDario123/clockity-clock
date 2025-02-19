import type { JSX } from "react";
import { useEffect, useState } from "react";
import { useOffsetContext } from "#shared/OffsetContext";
import { getPossibleTimezones, getTimeOffsetByTimezone } from "#shared/service";

export function TimezoneOffsetController(): JSX.Element {
  const [timezone, setTimezone] = useState("UTC");
  const [possibleTimezones, setPossibleTimezones] = useState<string[]>(["UTC"]);
  const { setTimezoneOffset } = useOffsetContext();

  // Fetch possible timezones on first render
  useEffect(() => {
    (async () => {
      if (possibleTimezones.length > 1) {
        return;
      }

      const timezones = await getPossibleTimezones();
      setPossibleTimezones(timezones);
    })();
  }, []);

  // Every 10 seconds, or when the timezone changes, we update the offset
  useEffect(() => {
    const interval = setInterval(async () => {
      setTimezoneOffset(await getTimeOffsetByTimezone(timezone));
      console.log("Updated timezone offset");
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [timezone]);

  return (
    <div>
      <select
        name="timezone"
        id="timezone"
        onChange={(e) => setTimezone(e.target.value)}
      >
        {possibleTimezones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
    </div>
  );
}
