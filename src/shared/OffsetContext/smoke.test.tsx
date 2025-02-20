import { render } from "@testing-library/react";
import { OffsetContextProvider } from "./index.ts";

it("smoke test", () => {
  render(<OffsetContextProvider />);
});
