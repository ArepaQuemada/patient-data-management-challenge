import { render, screen } from "@testing-library/react";
import App from "./App";
describe("Testing App", () => {
  test("Example", () => {
    render(<App />);
    const text = screen.getByText("Hello");
    expect(text).toBeVisible();
  });
});
