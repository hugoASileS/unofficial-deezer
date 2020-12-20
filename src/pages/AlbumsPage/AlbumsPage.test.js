import { render, screen } from '@testing-library/react';
import AlbumsPage from './';
import { Provider } from 'react-redux';
import { generateStore } from '../../redux/rootStore';

fdescribe('Testing AlbumsPage', () => {
  it('should have the title', () => {
    render(
      <Provider store={generateStore()}>
        <AlbumsPage />
      </Provider>
    );

    const title = screen.getByText(/Este es el listado de albums/i);
    expect(title).toBeInTheDocument();
  });
});
