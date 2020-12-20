import { render, screen } from '@testing-library/react';
import MainPlayer from './';
import { Provider } from 'react-redux';
import { generateStore } from '../../redux/rootStore';

describe('Testing MainPlayer', () => {
  it('renders learn react link', () => {
    render(
      <Provider store={generateStore()}>
        <MainPlayer />
      </Provider>
    );

    const title = screen.getByText(/Main player/i);
    expect(title).toBeInTheDocument();
  });
});
