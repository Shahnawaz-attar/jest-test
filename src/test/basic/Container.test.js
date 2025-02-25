import "@testing-library/jest-dom"
import Container from "../../components/basic/Container"
import { render, screen } from "@testing-library/react"


describe('Container Component',()=>{

    test('render children', () => { 

        render(
            <Container>
                <p>Hello world</p>
            </Container>
        )

        const childElem = screen.getByText(/Hello World/i)
        expect(childElem).toBeInTheDocument()


     })
})