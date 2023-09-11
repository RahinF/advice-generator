import Button from '@components/Button';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  const mockOnClick = jest.fn();

  it('renders a button', () => {
    render(
      <Button
        onClick={mockOnClick}
        isFetching={false}
      />,
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders an image', () => {
    render(
      <Button
        onClick={mockOnClick}
        isFetching={false}
      />,
    );

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('disables button if its fetching', () => {
    render(
      <Button
        onClick={mockOnClick}
        isFetching={true}
      />,
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('enables button if its not fetching', () => {
    render(
      <Button
        onClick={mockOnClick}
        isFetching={false}
      />,
    );

    const button = screen.getByRole('button');

    expect(button).toBeEnabled();
  });
});
