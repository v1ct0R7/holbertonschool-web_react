import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  it('getCurrentYear returns the current year', () => {
    expect(getCurrentYear()).toBe(new Date().getFullYear());
  });

  it('getFooterCopy returns the right string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});