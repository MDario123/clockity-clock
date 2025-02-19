import { afterEach, describe, expect, it, vi } from "vitest";
import { getTimeOffsetByTimezone } from "./getters";
import { Time } from "#shared/Time";

describe("getTimeByTimezone", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return the current time in the specified timezone", async () => {
    const timezone = "Europe/Amsterdam";
    const mockTime = {
      hour: 17,
      minute: 3,
      seconds: 31,
    };

    // mock the fetch function
    const f = vi
      .spyOn(global, "fetch")
      .mockImplementation(
        vi.fn(() =>
          Promise.resolve({ 
            json: () => Promise.resolve(mockTime),
            headers: { get: () => "Wed,19 Feb 2025 16:03:31 GMT " },
          }),
        ) as unknown as typeof fetch,
      );

    const time = await getTimeOffsetByTimezone(timezone);

    expect(time).toEqual(new Time(1, 0, 0));
    expect(f).toHaveBeenCalledTimes(1);
  });
});
