import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img Component', () => {
  it('renders image with alt text', () => {
    render(<Img src="test.jpg" alt="My Image" />);
    expect(screen.getByAltText('My Image')).toBeInTheDocument();
  });
});
