import { render } from "@testing-library/react";
import { MyThemeProvider } from "./index.ts";

it("smoke test", () => {
  render(<MyThemeProvider />);
});
