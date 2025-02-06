import "@testing-library/jest-dom"; // Import Jest DOM matchers
import React from "react";
import { screen, render } from "@testing-library/react";
import HelloWorld from "../../components/basic/HelloWorld";

describe("HelloWorld Component", () => {
  /**
   * Test to check if the component renders the text "Hello, World!".
   */
  test('renders "Hello, World!"', () => {
    // Render the HelloWorld component.
    render(<HelloWorld />);
    // Look for the element with the text "Hello, World!" (case-insensitive).
    const headingElement = screen.getByText(/Hello, World/i);
    // Assert that the element is found in the document.
    expect(headingElement).toBeInTheDocument();
  });
});
