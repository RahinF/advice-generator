import AdviceText from '@components/AdviceText';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Advice Text', () => {
  const sampleText = 'Lorem, ipsum dolor sit amet consectetur';

  it('renders advice paragraph text', () => {
    render(<AdviceText>{sampleText}</AdviceText>);

    const text = screen.getByText(`"${sampleText}"`);

    expect(text).toBeInTheDocument();
  });
});
