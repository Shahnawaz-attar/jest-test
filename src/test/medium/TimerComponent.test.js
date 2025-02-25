import '@testing-library/jest-dom'
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import TimerComponent from '../../components/medium/TimerComponent';


jest.useFakeTimers();

describe('TimerComponent', () => {
  test('updates count after timeout', () => {
    render(<TimerComponent />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    act(()=>{
        jest.advanceTimersByTime(500);
    })
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });
});