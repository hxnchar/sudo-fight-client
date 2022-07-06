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
    <div
      className={`${styles.container} ${text ? styles['has-text'] : ''}`}
      onClick={onClickInput}
      data-testid={'container-elem'}>
      <label data-testid={'label-elem'}>{label}</label>
      <input
        placeholder={label} {...props}
        onChange={onTextChange}
        id="input"
        ref={ref}
        data-testid={'input-elem'}
      />
    </div>
  );
};

export default Index;
