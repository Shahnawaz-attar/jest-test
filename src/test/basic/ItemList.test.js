import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ItemList from "../../components/basic/ItemList"

describe('ItemList component',()=>{
    test('render Item List items', () => {

        const sampleArray = ['Apple', 'banana','cherry'];

        render(<ItemList items={sampleArray} />)
        
        sampleArray.map((item)=>{
            const listItem = screen.getByText(item);
            expect(listItem).toBeInTheDocument()
        })


      })
})