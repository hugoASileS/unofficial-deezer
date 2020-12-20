import { render, screen } from '@testing-library/react';
import NotFoundPage from './';
import { BrowserRouter } from 'react-router-dom';

describe('Testing NotFoundPage', () => {
  it('should have the link to return home', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const link = screen.getByText(/Go home/i);
    expect(link).toBeInTheDocument();
  });
});
