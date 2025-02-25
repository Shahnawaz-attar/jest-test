import "@testing-library/jest-dom"
import { screen , render } from "@testing-library/react"
import MultiElement from "../../components/basic/MultiElement"

describe('MultiElement', () => { 

    test('render multiElem', () => { 

        render(<MultiElement />)

        const titleElement = screen.getByText(/Title/i);
        // Check for the description.
        const descriptionElement = screen.getByText(/Description text here/i);
        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();

     })
 })