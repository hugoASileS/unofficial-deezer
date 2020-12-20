import { render, screen } from '@testing-library/react';
import HomePage from './';

describe('Testing HomePage', () => {
  it('should have the title', () => {
    render(<HomePage />);

    const title = screen.getByText(/Este es el home/i);
    expect(title).toBeInTheDocument();
  });
});
