import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<HeroImage image="test.jpg" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
