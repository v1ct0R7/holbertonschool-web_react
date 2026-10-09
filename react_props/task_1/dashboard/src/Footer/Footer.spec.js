import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

describe('Footer', () => {
  it('renders the copyright string when isIndex is true', () => {
    render(<Footer />);
    const expected = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;
    expect(screen.getByText(expected)).toBeInTheDocument();
  });
});