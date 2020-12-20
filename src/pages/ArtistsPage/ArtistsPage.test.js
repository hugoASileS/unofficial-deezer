import { render, screen } from '@testing-library/react';
import ArtistsPage from './';

describe('Testing ArtistsPage', () => {
  it('should have the title', () => {
    render(<ArtistsPage />);

    const title = screen.getByText(/Este es el listado de artistas/i);
    expect(title).toBeInTheDocument();
  });
});
