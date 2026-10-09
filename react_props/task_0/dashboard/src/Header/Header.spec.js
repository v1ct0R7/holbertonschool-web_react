import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });
});