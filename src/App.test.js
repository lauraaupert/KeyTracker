import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders start typing on load", () => {
  render(<App />);
  const textElement = screen.getByText(/Start typing/i);
  expect(textElement).toBeInTheDocument();
});
describe("App", () => {
  describe("code", () => {
    it("should display the correct code", async () => {
      const { queryByText } = render(<App />);
      fireEvent.keyDown(document.body, { key: "a", code: 65 });
      await waitFor(() => {
        expect(queryByText("65")).toBeInTheDocument();
      });
    });
  });
});
