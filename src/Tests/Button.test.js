import Button from "../UI/Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("renders button with give text", () => {
    const dummyText = "button text";
    render(<Button text={dummyText} />);
    expect(screen.getByRole("button")).toHaveTextContent(dummyText);
  });
});
