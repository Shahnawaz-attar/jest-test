import "@testing-library/jest-dom"
import {render} from "@testing-library/react"
import StaticMessage from "../../components/basic/StaticMessage"



describe('StaticMessage Component',()=>{

    test('matches snapshot', () =>{

        const {asFragment} = render(<StaticMessage/>)
        expect(asFragment()).toMatchSnapshot()
    })
})
