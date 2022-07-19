import { cleanup, render, screen } from '@testing-library/react';
import { Register } from 'components/pages';
import React from 'react';

describe('Register page test', () => {
  test('All elements are present', () => {
    render(<Register />);
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByText(/Registration/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Confirm password/i)).toBeInTheDocument();
    expect(screen.getByText(/Continue/i)).toBeInTheDocument();
    expect(screen.getByText(/Already a member?/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
  test('Elements have corresponding styles', () => {
    render(<Register />);
    expect(screen.getByText('Continue')).toHaveClass('button-filled');
  });
  afterEach(cleanup);
});
