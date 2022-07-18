import React, { useState } from 'react';
import styles from './Login.module.scss';
import { CInput, CButton } from 'components';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_DOMAIN}/login`, {
        username,
        password,
      });
    } catch (e) {
      console.error(e);
    } finally {
      //loaders logic
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} role={'form'}>
        <h1>Welcome</h1>
        <div className={styles.inputs}>
          <CInput label={'Username'}
            onChange={(e) => setUsername(e.target.value)}/>
          <CInput label={'Password'} type={'password'}
            onChange={(e) => setPassword(e.target.value)} />
          <a href="sign-up" className={`${styles['forgot-password']}`}>
            Forgot Password
          </a>
        </div>
        <CButton decor={'filled'}>Login</CButton>
        <div className={styles['elements-inline']}>
          <p>Not a member yet?</p>
          <a href="sign-up">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
