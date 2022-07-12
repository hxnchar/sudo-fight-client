import React from 'react';
import styles from './Loader.module.scss';

const Loader = () =>
  <div className={styles.overlay}>
    <div className={styles.container}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  </div>
;

export default Loader;
