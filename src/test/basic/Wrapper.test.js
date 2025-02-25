import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Wrapper from "../../components/basic/Wrapper";

describe("Wrapper", () => {
  test("renders provided children", () => {
    render(
      <Wrapper>
        <span>Child element</span>
      </Wrapper>
    );

    const element = screen.getByText(/Child element/i);
    expect(element).toBeInTheDocument(element);
  });
  test('renders default message when no children provided', () => {
    render(<Wrapper />);
    const defaultMessage = screen.getByText(/No content provided/i);
    expect(defaultMessage).toBeInTheDocument();
  });
});
