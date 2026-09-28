import { render, screen } from 'testing-library/react';
import App from './App.jsx';

test('load App component', () => {
  render(<App-header />)
});

test('render 2p tags', () => {
    render(<App-body />, <App-footer />)
});

test('render img', () => {
  render(<App-logo />)
});