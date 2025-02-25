import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react"
import DataDisplay from "../../components/medium/DataDisplay"
import {fetchData} from '../../components/apis/api'

// Mock the fetchData function.
jest.mock('../../components/apis/api') // path of fetchdata fun

describe('DataDisplay component', () => { 

    test('display api mock data', async() => { 

        fetchData.mockResolvedValue('Mocked data');

        render(<DataDisplay />)

        await waitFor(()=>{
            expect(screen.getByText(/Mocked data/i)).toBeInTheDocument()
        })

     })
 })
