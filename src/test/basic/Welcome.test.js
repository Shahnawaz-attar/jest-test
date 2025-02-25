import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Welcome from "../../components/basic/Welcome"



describe('Welcome Component' ,()=>{

    test('render default prop', () => { 
        render(<Welcome name="Guest"/>)
        const defaultProp = screen.getByText(/Guest/i);
        expect(defaultProp).toBeInTheDocument()
     });

     test('renders greeting with default name when no name is provided', () => {
        // Render without passing the name prop.
        render(<Welcome />);
        const greetingElement = screen.getByText(/Welcome, Guest!/i);
        expect(greetingElement).toBeInTheDocument();
      });
})