import React from 'react';
import styles from './GameModal.module.scss';
import { CButton } from 'components/basic';

interface IGameModal {
  name: string;
  author: string;
  elo: number;
  isPrivate: boolean;
}

const GameModal = ({ ...props } : IGameModal) => {
  const openProfile = (id: number) => {
    console.log(id);
    //TODO open profile
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{props.name}</h1>
      <div className={styles.player} onClick={() => openProfile}>
        <span>{props.author}</span>
        <span>({props.elo})</span>
      </div>
      <span style={{ visibility: props.isPrivate ? 'visible' : 'hidden' }}>🔒</span>
      <CButton decor={'filled'}>Join</CButton>
    </div>
  );
};


export default GameModal;
