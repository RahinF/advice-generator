import Spinner from '@app/components/Spinner';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Spinner', () => {
  it('renders loading text', () => {
    render(<Spinner />);

    const text = screen.getByText(/loading.../i);

    expect(text).toBeInTheDocument();
  });

  it('renders spinner', () => {
    render(<Spinner />);

    const spinner = screen.getByTestId('circles-svg');

    expect(spinner).toBeInTheDocument();
  });
});
