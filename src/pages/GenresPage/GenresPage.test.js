import { render, screen } from '@testing-library/react';
import GenresPage from './';

describe('Testing GenresPage', () => {
  it('should have the title', () => {
    render(<GenresPage />);

    const title = screen.getByText(/Generos/i);
    expect(title).toBeInTheDocument();
  });
});
