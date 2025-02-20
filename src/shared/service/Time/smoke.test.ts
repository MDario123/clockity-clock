import * as test from "./index.ts";

it("smoke test", () => {
  Object.entries(test).every(([_, value]) => {
    expect(value).toBeDefined();
  });
});
