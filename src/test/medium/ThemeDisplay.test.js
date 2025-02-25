import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { ThemeContext } from "../../components/context/ThemeContext"
import ThemeDisplay from "../../components/medium/ThemeDisplay"


describe('ThemeDisplay', () => { 

    test('display the context value', () => { 

        render(
            <ThemeContext.Provider value="dark">
                <ThemeDisplay/>
            </ThemeContext.Provider>
        )

        expect(screen.getByText(/Current Theme: dark/i)).toBeInTheDocument()

     })
 })