import React from 'react';
import styles from '../Login/Login.module.scss';
import { CInput } from 'components';
import { CButton } from 'components';

const Login = () => {
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    //some logic would be here soon
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <h1>Registration</h1>
        <div className={styles.inputs}>
          <CInput label={'First name'} />
          <CInput label={'Last name'} />
          <CInput label={'Email'} />
          <CInput label={'Password'} type={'password'} />
          <CInput label={'Confirm password'} type={'password'} />
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
