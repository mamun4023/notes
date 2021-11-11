import { render, screen } from '@testing-library/react';
import Home from './home';

test('renders learn react link', () => {
  render(<Home name = "akbar"/>);
  const linkElement = screen.getByText(/akbar/i);
  expect(linkElement).toBeInTheDocument();
});
