import React from 'react';
import styles from './User.module.scss';
import { secondsToString } from './helpers';

interface IUser {
  nickname: string;
  victoriesCount: number;
  defeatsCount: number;
  totalTime: number;
}

const User = ({ ...props } : IUser) => {
  const totalMatches = props.victoriesCount + props.defeatsCount;
  const avgSeconds = Math.round(props.totalTime / totalMatches);//s
  return (
    <div className={styles.container}>
      <div className={styles.vertical}>
        <img src={'https://picsum.photos/200/300'} />
        <h1 className={styles.nickname}>@{props.nickname}</h1>
        <hr />
      </div>
      <div className={styles.stats}>
        { props.victoriesCount + props.defeatsCount === 0
          ? <p>{'This player didn\'t play yet :('}</p>
          : <div className={styles.data}>
            <div className={styles.vertical}>
              <p>Average time spent on each game</p>
              <b>{secondsToString(avgSeconds)}</b>
            </div>
            <div className={styles.vertical}>
              <p>Games summary</p>
              <div className={styles.winrate}>
                <div className={styles.result}>
                  <b className={styles.positive}>{props.victoriesCount}</b>
                  <p>Victories</p>
                </div>
                <div className={styles.result}>
                  <b className={styles.negative}>{props.defeatsCount}</b>
                  <p>Defeats</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default User;
