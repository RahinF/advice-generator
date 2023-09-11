import AdviceNumber from '@components/AdviceNumber';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Advice Number', () => {
  const slipId: number = 100;

  it('renders advice number text', () => {
    render(<AdviceNumber slipId={slipId} />);

    const regex = new RegExp(`advice #${slipId}`, 'i');

    const text = screen.getByText(regex);

    expect(text).toBeInTheDocument();
  });
});
