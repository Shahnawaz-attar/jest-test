import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

describe("UserProfile Component", () => {
  test("displays user ID from URL params", async () => {
    render(
      <MemoryRouter initialEntries={["/user/42"]}>
        <Routes>
          <Route path="/user/:userId" element={<UserProfile />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText(/User ID: 42/i)).toBeInTheDocument();
  });
});
