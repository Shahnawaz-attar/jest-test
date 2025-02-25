import "@testing-library/jest-dom"
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CounterDisplayWithHook from "../../components/medium/CounterDisplayWithHook";
describe('CounterDisplayWithHook Component', () => {
  test('increments hook count on button click', () => {
    render(<CounterDisplayWithHook />);
    const button = screen.getByText(/Increment Hook/i);
    expect(screen.getByText(/Hook Count: 0/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/Hook Count: 1/i)).toBeInTheDocument(); 
  });
});
