import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('contains the Holberton logo', () => {
    render(<Header />);
    expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument();
  });

  it('contains the h1 element with the correct text', () => {
    render(<Header />);
    expect(
      screen.getByRole('heading', { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
  });
});