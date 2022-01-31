import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("render App component", () => {
    render(<App />);
    expect(screen.getByText("learn react")).toBeInTheDocument();
    expect(screen.getByText("learn react")).toHaveClass("eclipse");
    expect(screen.getByText("learn react")).toHaveStyle("color:red");
    screen.debug();
  });

  it("fireIvent", () => {
    const { getByRole } = render(<input type="checkbox" data-testid="input" />);
    const input = getByRole("checkbox");
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).toBeChecked();
  });
});
