import "@testing-library/jest-dom"
import React from "react"

import { screen ,render } from "@testing-library/react"
import Greeting from "../../components/basic/Greeting"


describe('Greeting Component',()=>{

    test('render greeting with prop name',()=>{

        render(<Greeting name="shahnawaz" />)

        const headingElement = screen.getByText(/Hello, shahnawaz/i);

        expect(headingElement).toBeInTheDocument()

    })

})