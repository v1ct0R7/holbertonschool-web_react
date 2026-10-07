import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the h1 element with the text "School Dashboard"', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /school dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test('renders the text content of the paragraphs in app-body and app-footer', () => {
    render(<App />);

    const bodyText = screen.getByText(/login to access the full dashboard/i);
    const footerText = screen.getByText(/copyright \d{4} - holberton school/i);

    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test('renders an img element', () => {
    render(<App />);

    const image = screen.getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });
});