import "@testing-library/jest-dom"
import ShowMessage from "../../components/basic/ShowMessage"
import { render, screen } from "@testing-library/react"



describe('Show Message Component',()=>{


    test('render message when show is true', () => { 

        render(<ShowMessage show={true} />)
        const messageElem = screen.getByText(/The message is visible/);
        expect(messageElem).toBeInTheDocument();

     })
})