import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("loads and displays greeting", async () => {
  // ARRANGE
  const handleClick = vi.fn();
  render(<App />);

  // ACT
  await userEvent.click(screen.getByText("Click me!"));

  // ASSERT
  expect(handleClick).toHaveBeenCalledTimes(1);
});
