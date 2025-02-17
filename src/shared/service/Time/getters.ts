import type { Time } from "./types";
import { isTime } from "./types";

const baseURL = "https://www.timeapi.io/api";

export async function getTimeByTimezone(timezone: string): Promise<Time> {
  const url = new URL(`${baseURL}/time/current/zone`);
  url.searchParams.append("timezone", timezone);

  const response = await fetch(url);
  const data: unknown = await response.json();

  if (!isTime(data)) {
    throw new Error(
      `Invalid time response from API. Received: ${JSON.stringify(data)}`,
    );
  }

  return data;
}
