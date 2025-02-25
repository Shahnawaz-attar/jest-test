import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FruitList from "../../components/basic/FruitList";

describe("FruitList", () => {
  test("render a list", () => {
    const listItem = ["apple", "banana", "mango"];

    render(<FruitList fruits={listItem} />);

    listItem.map((item) => {
      const elem = screen.getByText(item);
      expect(elem).toBeInTheDocument();
    });
  });
});
