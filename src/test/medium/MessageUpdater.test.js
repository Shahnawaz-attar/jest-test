import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MessageUpdater from "../../components/medium/MessageUpdater";

describe("MessageUpdater", () => {
  test("render message on dependacy is there", () => {
    render(<MessageUpdater trigger={true} />);
    expect(screen.getByText(/Updated Message/i)).toBeInTheDocument();
  });

  test("render message on dependacy is absence", () => {
    render(<MessageUpdater trigger={false} />);
    expect(screen.getByText(/Initial Message/i)).toBeInTheDocument();
  });
});
