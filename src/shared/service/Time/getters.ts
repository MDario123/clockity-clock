import { Time } from "#shared/Time";

const baseURL = "https://www.timeapi.io/api";

export async function getTimeOffsetByTimezone(timezone: string): Promise<Time> {
  const url = new URL(`${baseURL}/time/current/zone`);
  url.searchParams.append("timezone", timezone);

  const response = await fetch(url);
  const headers = response.headers;
  const data: unknown = await response.json();

  if (!(
    typeof data === "object" &&
    data !== null &&
    "hour" in data &&
    typeof data.hour === "number" &&
    "minute" in data &&
    typeof data.minute === "number" &&
    "seconds" in data &&
    typeof data.seconds === "number")
  ) {
    throw new Error(
      `Invalid time response from API. Received: ${JSON.stringify(data)}`,
    );
  }

  const tzHour = data.hour;
  const tzMinute = data.minute;
  const tzSeconds = data.seconds;

  // Parse date header
  const dateHeader = headers.get("date");
  if (dateHeader === null) {
    throw new Error("Date header not found in response");
  }

  const date = new Date(dateHeader);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  // Calculate offset
  const offsetHour = tzHour - hour;
  const offsetMinute = tzMinute - minute;
  const offsetSeconds = tzSeconds - seconds;

  return new Time(offsetHour, offsetMinute, offsetSeconds);
}

