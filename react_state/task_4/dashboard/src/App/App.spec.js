import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('removes a notification and logs when clicked', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  render(<App />);

  const item = screen.getByText('New course available');
  fireEvent.click(item);

  expect(logSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  expect(screen.queryByText('New course available')).not.toBeInTheDocument();
  logSpy.mockRestore();
});