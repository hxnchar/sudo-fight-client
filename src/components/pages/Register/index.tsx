import React, { useState } from 'react';
import styles from '../Login/Login.module.scss';
import { CInput } from 'components';
import { CButton } from 'components';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const usernameIsValid = (username: string) => username.match(/(?=.{4,15}$)[[0-9a-zA-Z]/);
  const passwordIsValid = (password: string) => password.match(/(?=.{8,20}$)[[0-9a-zA-Z]/);
  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (usernameIsValid(username) &&
        passwordIsValid(password) &&
        password === confirmPassword) {
        await axios.post(`${process.env.REACT_APP_DOMAIN}/register`, {
          username,
          email,
          password,
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      //loaders logic
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} role={'form'}>
        <h1>Registration</h1>
        <div className={styles.inputs}>
          <CInput label={'Username'}
            onChange={(e) => {
              setUsername(e.target.value);
            }} />
          <CInput label={'Email'}
            onChange={(e) => setEmail(e.target.value)} />
          <CInput label={'Password'} type={'password'}
            onChange={(e) => setPassword(e.target.value)} />
          <CInput label={'Confirm password'} type={'password'}
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <CButton decor={'filled'}>Continue</CButton>
        <div className={styles['elements-inline']}>
          <p>Already a member?</p>
          <a href="login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
