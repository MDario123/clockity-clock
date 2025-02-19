import { Time } from "./index";

describe("Time", () => {
  it("should be creatable", () => {
    const time: Time = new Time(12, 30, 45);

    expect(time).toBeInstanceOf(Time);
    expect(time.hour).toBe(0);
    expect(time.minute).toBe(30);
    expect(time.seconds).toBe(45);
  });

  it("shoud use a canonical representation", () => {
    const time: Time = new Time(12, 70, 130);

    expect(time.hour).toBe(1);
    expect(time.minute).toBe(12);
    expect(time.seconds).toBe(10);
  });

  it("should be creatable with negative values", () => {
    const time: Time = new Time(-1, -1, -1);

    expect(time.hour).toBe(10);
    expect(time.minute).toBe(58);
    expect(time.seconds).toBe(59);
  });

  it("should be addable", () => {
    const time1: Time = new Time(12, 30, 45);
    const time2: Time = new Time(1, 45, 15);

    const result: Time = time1.add(time2);

    expect(result.hour).toBe(2);
    expect(result.minute).toBe(16);
    expect(result.seconds).toBe(0);
  });

});
