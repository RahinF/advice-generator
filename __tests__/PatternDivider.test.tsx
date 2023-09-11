import PatternDivider from '@components/PatternDivider';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Pattern Divider', () => {
  it('renders an image', () => {
    render(<PatternDivider />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
