import type { Time } from "./types";
import { isTime } from "./types";

describe("isTime", () => {
  it("should return true if the object is a valid Time", () => {
    const time: Time = {
      hour: 12,
      minute: 30,
      seconds: 45,
    };

    expect(isTime(time)).toBe(true);
  });

  it("should return false if the object is not a valid Time", () => {
    const time = {
      hour: 12,
      minute: 30,
    };

    expect(isTime(time)).toBe(false);
  });

  it("should return true if the object has more fields than expected", () => {
    const time = {
      year: 2025,
      month: 2,
      day: 17,
      hour: 7,
      minute: 46,
      seconds: 33,
      milliSeconds: 683,
      dateTime: "2025-02-17T07:46:33.6835938",
      date: "02/17/2025",
      time: "07: 46",
      timeZone: "America / New_York",
      dayOfWeek: "Monday",
      dstActive: false,
    };

    expect(isTime(time)).toBe(true);
  });
});
