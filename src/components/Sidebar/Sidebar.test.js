import { render, screen } from '@testing-library/react';
import Sidebar from './';
import { generateStore } from '../../redux/rootStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Testing Sidebar', () => {
  it('renders learn react link', () => {
    render(
      <Provider store={generateStore()}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>
    );

    const button = screen.getByText(/Browse/i);
    expect(button).toBeInTheDocument();
  });
});
