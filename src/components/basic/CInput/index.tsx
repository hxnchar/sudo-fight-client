import React, { ComponentProps, InputHTMLAttributes, useState } from 'react';
import styles from './CInput.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Index = ({ label, ...props }: InputProps & ComponentProps<'input'>) => {
  const [text, setText] = useState('');
  const ref = React.createRef<HTMLInputElement>();
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const onClickInput = () => ref.current?.focus();

  return (
    <div className={`${styles.container} ${text ? styles['has-text'] : ''}`} onClick={onClickInput}>
      <label>{label}</label>
      <input {...props} onChange={onTextChange} id="input" ref={ref} />
    </div>
  );
};

export default Index;
