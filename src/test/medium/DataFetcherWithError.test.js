import "@testing-library/jest-dom";
import { render, screen, waitFor } from '@testing-library/react';
import DataFetcherWithError from "../../components/medium/DataFetcherWithError";
describe('DataFetcherWithError Component', () => {
  test('displays error message when fetching fails', async () => {
    render(<DataFetcherWithError />);
    await waitFor(() => {
      expect(screen.getByText(/Error: Fetch failed/i)).toBeInTheDocument();
    });
  });
});