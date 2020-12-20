import { render, screen } from '@testing-library/react';
import AlbumsPage from './';

describe('Testing AlbumsPage', () => {
  it('should have the title', () => {
    render(<AlbumsPage />);

    const title = screen.getByText(/Este es el listado de albums/i);
    expect(title).toBeInTheDocument();
  });
});
