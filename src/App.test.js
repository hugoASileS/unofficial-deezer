import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getByTestId('header');
  const sidebar = screen.getByTestId('sidebar');
  const footer = screen.getByTestId('player');
  expect(header).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
