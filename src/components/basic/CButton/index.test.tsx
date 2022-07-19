import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { CButton } from 'components/basic';

describe('Button component test', () => {
  test('Structure is correct', () => {
    render(<CButton decor={'filled'} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('Children are present', () => {
    const textToBeRendered = 'Continue';
    render(<CButton decor={'filled'}>{textToBeRendered}</CButton>);
    expect(screen.getByText(textToBeRendered)).toBeInTheDocument();
  });
  test('Styles [filled] are correct', () => {
    render(<CButton decor={'filled'} />);
    expect(screen.getByRole('button')).toHaveClass('button-filled');
  });
  test('Styles [outlined] are correct', () => {
    render(<CButton decor={'outlined'} />);
    expect(screen.getByRole('button')).toHaveClass('button-outlined');
  });
  test('Styles [transparent] are correct', () => {
    render(<CButton decor={'transparent'} />);
    expect(screen.getByRole('button')).toHaveClass('button-transparent');
  });
  test('Style [negative] is correct', () => {
    render(<CButton decor={'filled'} isNegative={true} />);
    expect(screen.getByRole('button')).toHaveClass('negative');
  });
  afterEach(cleanup);
});
