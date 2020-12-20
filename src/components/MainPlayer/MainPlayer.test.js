import { render, screen } from '@testing-library/react';
import MainPlayer from './';

describe('Testing MainPlayer', () => {
  it('renders learn react link', () => {
    render(<MainPlayer />);

    const title = screen.getByText(/Main player/i);
    expect(title).toBeInTheDocument();
  });
});
