import { render, screen } from '@testing-library/react';
import App from './App';
import { CardProvider } from './CardProvider';

test('renders learn react link', () => {
  render(
    <CardProvider>
      <App />
    </CardProvider>);
  const linkElement = screen.getByText(/Player 1/i);
  expect(linkElement).toBeInTheDocument();
});
