import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { CButton, CInput } from 'components';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

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

describe('Input component test', () => {
  test('Structure is correct', () => {
    render(<CInput label={'Username'}/>);
    expect(screen.getByTestId('label-elem')).toBeInTheDocument();
    expect(screen.getByTestId('input-elem')).toBeInTheDocument();
  });
  test('Behaviour is correct', async () => {
    render(<CInput label={'Username'}/>);
    const labelElem = screen.getByTestId('label-elem');
    const input = screen.getByTestId('container-elem');
    expect(labelElem).not.toHaveClass('has-text');
    userEvent.click(input);
    await userEvent.type(screen.getByTestId('input-elem'), 'Behaviour is correct');
    expect(input).toHaveClass('has-text');
  });
  afterEach(cleanup);
});
