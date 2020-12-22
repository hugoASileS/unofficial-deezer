import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { generateStore } from '../../redux/rootStore';
import AlbumsPage from './AlbumsPage';

fdescribe('Testing AlbumsPage', () => {
  it('should have the title', () => {
    render(
      <Provider store={generateStore()}>
        <AlbumsPage />
      </Provider>
    );

    const title = screen.getByText(/Albums/i);
    expect(title).toBeInTheDocument();
  });
});
