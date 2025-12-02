import { render, screen } from '@testing-library/react';
import App from './App';

test('renders birthday message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Happy Birthday/i);
  expect(headingElement).toBeInTheDocument();
});
