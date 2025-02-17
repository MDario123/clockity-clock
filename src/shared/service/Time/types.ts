export interface Time {
  hour: number;
  minute: number;
  seconds: number;
}

// Time typeguard
export function isTime(data: unknown): data is Time {
  return (
    typeof data === "object" &&
    data !== null &&
    "hour" in data &&
    typeof data.hour === "number" &&
    "minute" in data &&
    typeof data.minute === "number" &&
    "seconds" in data &&
    typeof data.seconds === "number"
  );
}
