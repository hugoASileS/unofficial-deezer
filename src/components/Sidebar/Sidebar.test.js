import { render, screen } from '@testing-library/react';
import Sidebar from './';

describe('Testing Sidebar', () => {
  it('renders learn react link', () => {
    render(<Sidebar />);

    const title = screen.getByText(/Sidebar/i);
    expect(title).toBeInTheDocument();
  });
});
