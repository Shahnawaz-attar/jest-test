import { add } from "../../components/basic/add";

describe("add utility function testing", () => {
  test("test utility function", () => {
    expect(add(1, 2)).toBe(3);
  });
});
