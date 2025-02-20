import { render } from "@testing-library/react";
import { Clock } from "./index.ts";

it("smoke test", () => {
  render(<Clock />);
});
