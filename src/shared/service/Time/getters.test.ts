import { afterEach, describe, expect, it, vi } from "vitest";
import { getTimeByTimezone } from "./getters";

describe("getTimeByTimezone", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return the current time in the specified timezone", async () => {
    const timezone = "America/New_York";
    const mockTime = {
      hour: 12,
      minute: 30,
      seconds: 59,
    };

    // mock the fetch function
    const f = vi
      .spyOn(global, "fetch")
      .mockImplementation(
        vi.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(mockTime) }),
        ) as unknown as typeof fetch,
      );

    const time = await getTimeByTimezone(timezone);

    expect(time).toEqual(mockTime);
    expect(f).toHaveBeenCalledTimes(1);
  });
});
