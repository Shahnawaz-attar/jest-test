import "@testing-library/jest-dom"
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReducerCounter from "../../components/medium/ReducerCounter";


describe('ReducerCounter Component', () => {
  test('increments count on button click', () => {
    render(<ReducerCounter />);
    const button = screen.getByText(/Increment Reducer/i);
    expect(screen.getByText(/Reducer Count: 0/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/Reducer Count: 1/i)).toBeInTheDocument();
  });
});
