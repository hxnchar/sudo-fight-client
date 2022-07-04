import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Error, Login, Register } from 'components';
import '@testing-library/jest-dom';

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
