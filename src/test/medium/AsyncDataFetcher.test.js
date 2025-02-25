import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";
import AsyncDataFetcher from "../../components/medium/AsyncDataFetcher";

describe("AsyncDataFetcher", () => {
  test("display loading then fetch data", async () => {
    render(<AsyncDataFetcher />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Fetched Data/i)).toBeInTheDocument();
    });
  });
});
