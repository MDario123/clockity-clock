import { Time } from "#shared/Time";

const baseURL = "https://www.timeapi.io/api";

export async function getTimeOffsetByTimezone(timezone: string): Promise<Time> {
  const url = new URL(`${baseURL}/time/current/zone`);
  url.searchParams.append("timezone", timezone);

  const response = await fetch(url);
  const data: unknown = await response.json();

  if (
    !(
      typeof data === "object" &&
      data !== null &&
      "hour" in data &&
      typeof data.hour === "number" &&
      "minute" in data &&
      typeof data.minute === "number" &&
      "seconds" in data &&
      typeof data.seconds === "number" &&
      "dateTime" in data &&
      typeof data.dateTime === "string"
    )
  ) {
    throw new Error(
      `Invalid time response from API. Received: ${JSON.stringify(data)}`,
    );
  }

  const tzHour = data.hour;
  const tzMinute = data.minute;
  const tzSeconds = data.seconds;

  // Parse date header
  const date = new Date(
    new Date(data.dateTime).toLocaleString("en-US", { timeZone: timezone }),
  );
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  // Calculate offset
  const offsetHour = hour - tzHour;
  const offsetMinute = minute - tzMinute;
  const offsetSeconds = seconds - tzSeconds;

  return new Time(offsetHour, offsetMinute, offsetSeconds);
}

export async function getPossibleTimezones(): Promise<string[]> {
  const url = new URL(`${baseURL}/timezone/availabletimezones`);
  const response = await fetch(url);
  const data: unknown = await response.json();

  if (
    !(Array.isArray(data) && data.every((item) => typeof item === "string"))
  ) {
    throw new Error(
      `Invalid timezones response from API. Received: ${JSON.stringify(data)}`,
    );
  }

  return data;
}
