import "@testing-library/jest-dom";
import ButtonWithAction from "../../components/basic/ButtonWithAction";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ButtonWithAction Component", () => {
  test("calls the onAction callback when clicked", () => {
    const mockCallBack = jest.fn();

    render(<ButtonWithAction onAction={mockCallBack} />);

    const buttonElem = screen.getByText(/Click me/i);

    fireEvent.click(buttonElem);

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
