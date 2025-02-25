import "@testing-library/jest-dom"
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import IntervalCounter from "../../components/medium/IntervalCounter";



jest.useFakeTimers();

describe('IntervalCounter Component', () => {
  test('increments count at regular intervals', () => {
    render(<IntervalCounter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    act(()=>{
        jest.advanceTimersByTime(2000);
    })
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
  });
});
