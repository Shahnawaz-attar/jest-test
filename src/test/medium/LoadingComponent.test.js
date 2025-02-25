import "@testing-library/jest-dom"
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import LoadingComponent from "../../components/medium/LoadingComponent"

describe('LoadingComponent', () => { 

    test('test spinner disappear after data load', async() => { 

        render(<LoadingComponent />)

        expect(screen.getByRole('status')).toBeInTheDocument()

        await waitForElementToBeRemoved(()=> screen.queryByRole('status'))

        expect(screen.getByText(/Data Loaded/i)).toBeInTheDocument()



     })
 })