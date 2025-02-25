import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NameForm from "../../components/medium/NameForm";

describe("NameForm", () => {
  test("render user form input", () => {
    render(<NameForm />);

    const inputElem = screen.getByPlaceholderText(/Enter your name/i);

    fireEvent.change(inputElem, { target: { value: "shahnawaz" } });

    expect(screen.getByText(/Your name is: shahnawaz/i)).toBeInTheDocument();
  });
});
