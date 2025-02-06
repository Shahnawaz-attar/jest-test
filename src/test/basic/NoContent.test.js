import "@testing-library/jest-dom"
import NoContent from "../../components/basic/NoContent"
import { render } from "@testing-library/react"


describe('No COntent Component',()=>{

    test('render no Content',()=>{

        const {asFragment} = render(<NoContent/>)
        
        expect(asFragment().firstChild).toBeNull()
    })
})