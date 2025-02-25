import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import CounterWithButton from "../../components/medium/CounterWithButton"

describe('CounterWithButton test', () => { 

    test('increment count when button clicked', () => { 

        render(<CounterWithButton/>)

        const button = screen.getByText(/Increment/i)

        expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()
        
        fireEvent.click(button)
        expect(screen.getByText(/Count: 1/i)).toBeInTheDocument()

     })
 })