import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { User } from 'components';
import { secondsToString } from './helpers';
import React from 'react';

describe('User page test', () => {
  test('All elements are present', () => {
    const nickname = 'user.1';
    const [victoriesCount, defeatsCount] = [15, 3];
    const totalTime = 2500;
    render(<User nickname={nickname}
      victoriesCount={victoriesCount}
      defeatsCount={defeatsCount}
      totalTime={totalTime}
    />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(`@${nickname}`)).toBeInTheDocument();
    expect(screen.getByText('Average time spent on each game')).toBeInTheDocument();
    expect(screen.getByText('Games summary')).toBeInTheDocument();
    expect(screen.getByText(victoriesCount)).toBeInTheDocument();
    expect(screen.getByText('Victories')).toBeInTheDocument();
    expect(screen.getByText(defeatsCount)).toBeInTheDocument();
    expect(screen.getByText('Defeats')).toBeInTheDocument();
  });
  test('Convert time func is correct', () => {
    expect(secondsToString(1)).toBe('1s');
    expect(secondsToString(123)).toBe('2min 3s');
    expect(secondsToString(12345)).toBe('3hr 25min 45s');
  });
  afterEach(cleanup);
});
