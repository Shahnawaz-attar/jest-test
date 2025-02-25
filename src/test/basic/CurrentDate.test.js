import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CurrentDate from "../../components/basic/CurrentDate";

describe("CurrentDate compoent testing", () => {
  test("render date string", () => {
    const dateString = "2025-17-02";

    render(<CurrentDate dateString={dateString} />);

    expect(screen.getByText(new RegExp(dateString, "i"))).toBeInTheDocument();
  });
});
