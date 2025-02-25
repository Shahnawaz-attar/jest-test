import "@testing-library/jest-dom"
import AlertMessage from "../../components/basic/AlertMessage"
import { render, screen } from "@testing-library/react"


describe('AlertMessage component',()=>{

    test('renders alert message when provided', () => { 

        render(<AlertMessage alert="warning" />)

        const elements = screen.getByText(/warning/i)

        expect(elements).toBeInTheDocument()

     })

     test('renders alert message when not provider', () => { 

        const {asFragment} = render(<AlertMessage/>)

        expect(asFragment().firstChild).toBeNull()


     })

})