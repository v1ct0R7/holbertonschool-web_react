import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { newContext } from '../Context/context';

it('hides Contact us when logged out', () => {
  render(
    <newContext.Provider value={{ user: { email: '', password: '', isLoggedIn: false } }}>
      <Footer />
    </newContext.Provider>
  );
  expect(screen.queryByText('Contact us')).not.toBeInTheDocument();
});

it('shows Contact us when logged in', () => {
  render(
    <newContext.Provider value={{ user: { email: 'a@b.com', password: '12345678', isLoggedIn: true } }}>
      <Footer />
    </newContext.Provider>
  );
  expect(screen.getByText('Contact us')).toBeInTheDocument();
});