import React from 'react';
import styles from './Login.module.scss';
import { CInput, CButton } from 'components';

const Login = () => {
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    //some logic would be here soon
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} role={'form'}>
        <h1>Welcome</h1>
        <div className={styles.inputs}>
          <CInput label={'Username'} />
          <CInput label={'Password'} type={'password'} />
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
