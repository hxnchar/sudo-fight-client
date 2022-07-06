import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { CButton } from 'components';
import '@testing-library/jest-dom';

describe('Button component test', () => {
  test('Structure is correct', () => {
    render(<CButton decor={'filled'} />);
    expect(screen.getByTestId('btn-elem')).toBeInTheDocument();
  });
  test('Styles [filled] are correct', () => {
    render(<CButton decor={'filled'} />);
    expect(screen.getByTestId('btn-elem')).toHaveClass('button-filled');
  });
  test('Styles [outlined] are correct', () => {
    render(<CButton decor={'outlined'} />);
    expect(screen.getByTestId('btn-elem')).toHaveClass('button-outlined');
  });
  test('Styles [transparent] are correct', () => {
    render(<CButton decor={'transparent'} />);
    expect(screen.getByTestId('btn-elem')).toHaveClass('button-transparent');
  });
  test('Style [negative] is correct', () => {
    render(<CButton decor={'filled'} isNegative={true} />);
    expect(screen.getByTestId('btn-elem')).toHaveClass('negative');
  });
  test('Style [negative] is correct', () => {
    render(<CButton decor={'filled'} isNegative={true} />);
    expect(screen.getByTestId('btn-elem')).toHaveClass('negative');
  });
  afterEach(cleanup);
});

