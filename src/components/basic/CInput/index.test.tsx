import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '@testing-library/react';
import { CInput } from 'components/basic';

describe('Input component test', () => {
  test('Structure is correct', () => {
    const labelText = 'Username';
    render(<CInput label={labelText}/>);
    expect(screen.getByPlaceholderText(labelText)).toBeInTheDocument();
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });
  test('Behaviour is correct', async () => {
    const labelText = 'Username';
    render(<CInput label={labelText}/>);
    const input = screen.getByPlaceholderText(labelText);
    const container = screen.getByTestId('container-elem');
    expect(container).not.toHaveClass('has-text');
    userEvent.click(input);
    await userEvent.type(input, 'Behaviour is correct');
    expect(container).toHaveClass('has-text');
  });
  afterEach(cleanup);
});
