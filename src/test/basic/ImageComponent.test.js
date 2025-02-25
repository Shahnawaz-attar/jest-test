import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ImageComponent from "../../components/basic/ImageComponent";


describe('ImageComponent', () => {
    test('renders image with correct alt text', () => {
      render(<ImageComponent src="image.jpg" alt="Sample Image" />);
      const imageElement = screen.getByAltText(/Sample Image/i)
      expect(imageElement).toBeInTheDocument()
      expect(imageElement.getAttribute('src')).toBe('image.jpg')
    });
  });