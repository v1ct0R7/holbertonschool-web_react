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

    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders 2 input elements (email and password)', () => {
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('renders 2 label elements with the text "Email" and "Password"', () => {
    render(<App />);

    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(emailLabel.tagName).toBe('LABEL');
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordLabel.tagName).toBe('LABEL');
  });

  test('renders a button with the text "OK"', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /ok/i });

    expect(button).toBeInTheDocument();
  });
});