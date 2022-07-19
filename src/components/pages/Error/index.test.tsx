import { cleanup, render, screen } from '@testing-library/react';
import { Error } from 'components/pages';
import React from 'react';

describe('Error page test', () => {
  test('All elements are present', () => {
    render(<Error />);
    expect(screen.getByText('Looks like this page doesn\'t exist')).toBeInTheDocument();
    expect(screen.getByText('Return to home')).toBeInTheDocument();
  });
  test('Elements have corresponding styles', () => {
    render(<Error />);
    expect(screen.getByText('Return to home')).toHaveClass('button-filled');
  });
  afterEach(cleanup);
});
