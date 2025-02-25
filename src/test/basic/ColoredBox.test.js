import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ColoredBox from "../../components/basic/ColoredBox";

describe("ColorBox testing", () => {
  test('renders with "active" class when active is true', () => {
    render(<ColoredBox active={true} />);

    const ColorBoxElem = screen.getByText(/Active/i);
    expect(ColorBoxElem.className).toContain("active");
  });

  test('renders with "inactive" class when inactive is true', () => {
    render(<ColoredBox active={false} />);

    const ColorBoxElem = screen.getByText(/Inactive/i);
    expect(ColorBoxElem.className).toContain("inactive");
  });
});
