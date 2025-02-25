import "@testing-library/jest-dom"
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from "../../components/basic/UserCard";

describe('UserCard Component', () => {
  test('renders user name and age correctly', () => {
    render(<UserCard name="Charlie" age={30} />);
    const nameElement = screen.getByText(/Charlie/i);
    const ageElement = screen.getByText(/Age: 30/i);
    expect(nameElement).toBeInTheDocument();
    expect(ageElement).toBeInTheDocument();
  });
});
