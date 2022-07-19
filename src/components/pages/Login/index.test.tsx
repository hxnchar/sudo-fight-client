import { cleanup, render, screen } from '@testing-library/react';
import { Login } from 'components/pages';
import React from 'react';

describe('Login page test', () => {
  test('All elements are present', () => {
    render(<Login />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Forgot password/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Not a member yet?/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
  });
  test('Elements have corresponding styles', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toHaveClass('button-filled');
  });
  afterEach(cleanup);
});
