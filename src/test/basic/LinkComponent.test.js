import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LinkComponent from "../../components/basic/LinkComponent";

describe("LinkComponent", () => {
  test("render link component", () => {
    render(
      <LinkComponent url={"https://example.com"} text={"visit this site"} />
    );

    const linkElement = screen.getByText(/visit this site/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("https://example.com");
  });
});
