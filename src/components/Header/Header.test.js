import { render, screen } from '@testing-library/react';
import Header from './';

describe('Testing Loading', () => {
  it('renders learn react link', () => {
    render(<Header />);

    const title = screen.getByText(/Unofficial Deezer/i);
    expect(title).toBeInTheDocument();
  });
});
