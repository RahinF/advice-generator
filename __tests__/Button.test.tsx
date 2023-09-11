import Button from '@components/Button';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders an image', () => {
    render(<Button />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
