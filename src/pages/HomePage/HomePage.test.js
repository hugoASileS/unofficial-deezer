import { render, screen } from '@testing-library/react';
import HomePage from './';

describe('Testing HomePage', () => {
  it('should have the title', () => {
    render(<HomePage />);

    const title = screen.getByText(/Este sera el home próximamente/i);
    expect(title).toBeInTheDocument();
  });
});
