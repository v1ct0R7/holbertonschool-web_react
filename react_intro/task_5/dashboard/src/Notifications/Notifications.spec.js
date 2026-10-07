import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    render(<Notifications />);

    const title = screen.getByText(/here is the list of notifications/i);

    expect(title).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);

    const button = screen.getByRole('button', { name: /close/i });

    expect(button).toBeInTheDocument();
  });

  test('renders 3 list items as notifications', () => {
    render(<Notifications />);

    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(3);
  });

  test('logs "Close button has been clicked" when the close button is clicked', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);

    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringMatching(/close button has been clicked/i)
    );

    logSpy.mockRestore();
  });
});