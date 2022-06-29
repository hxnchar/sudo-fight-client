import React from 'react';
import styles from './Error.module.scss';
import { CButton } from 'components';

const Error = () =>
  <div className={styles.container}>
    <h1>Oops!</h1>
    <h2>{'Looks like this page doesn\'t exist'}</h2>
    <CButton decor={'filled'}>Return to home</CButton>
  </div>
;

export default Error;
