import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App keyboard shortcut', () => {
  let alertSpy;

  beforeEach(() => {
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  it('calls logOut once when ctrl + h are pressed', () => {
    const logOut = jest.fn();
    render(<App logOut={logOut} />);

    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

    expect(logOut).toHaveBeenCalledTimes(1);
  });

  it('calls alert with "Logging you out"', () => {
    render(<App />);

    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
  });

  it('does not call logOut for other keys', () => {
    const logOut = jest.fn();
    render(<App logOut={logOut} />);

    fireEvent.keyDown(document, { key: 'h' });

    expect(logOut).not.toHaveBeenCalled();
  });
});