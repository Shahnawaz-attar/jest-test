import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import SubmitForm from "../../components/medium/SubmitForm";

describe("SubmitForm component", () => {
  test("calls onSubmit with the input value when submitted", () => {
    const onSubmit = jest.fn();

    render(<SubmitForm onSubmit={onSubmit} />);

    const inputElem = screen.getByPlaceholderText(/Type something/i);
    const submitButton = screen.getByText(/Submit/i);

    fireEvent.change(inputElem, { target: { value: "Test input" } });

    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledWith("Test input");
  });
});
