import { render, screen } from '@testing-library/react';
import ArtistsPage from './ArtistsPage';
import { generateStore } from '../../redux/rootStore';
import { Provider } from 'react-redux';

describe('Testing ArtistsPage', () => {
  it('should have the title', () => {
    render(
      <Provider store={generateStore()}>
        <ArtistsPage />
      </Provider>
    );

    const title = screen.getByText(/Artistas/i);
    expect(title).toBeInTheDocument();
  });
});
