import "@testing-library/jest-dom"
import React from "react";
import StyledBox from "../../components/basic/StyledBox";
import { render, screen } from "@testing-library/react";


describe('StyledBox component',()=>{
    test('renders with correct text', () => {
        render(<StyledBox />);
        const boxElement = screen.getByText(/I am a styled box!/i);
        expect(boxElement).toBeInTheDocument();
      });

})