import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { GameModal } from 'components';

describe('GameModal component test', () => {
  test('Structure is correct', () => {
    const gameName = 'Game 1';
    const authorName = 'user.1';
    const authorElo = 150;
    const isPrivate = true;
    const { rerender } = render(
      <GameModal name={gameName} author={authorName} elo={authorElo} isPrivate={isPrivate}/>,
    );
    expect(screen.getByText(gameName)).toBeInTheDocument();
    expect(screen.getByText(authorName)).toBeInTheDocument();
    expect(screen.getByText(`(${authorElo})`)).toBeInTheDocument();
    expect(window.getComputedStyle(screen.getByText('🔒')).getPropertyValue('visibility')).toBe('visible');
    rerender(<GameModal name={gameName} author={authorName} elo={authorElo} isPrivate={!isPrivate}/>);
    expect(window.getComputedStyle(screen.getByText('🔒')).getPropertyValue('visibility')).toBe('hidden');

  });
  afterEach(cleanup);
});
