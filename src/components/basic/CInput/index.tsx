import React, { ComponentProps, useState } from 'react';
import styles from './CInput.module.scss';

interface InputProps extends Omit<ComponentProps<'input'>, 'placeholder'> {
  label: string;
}

const Index = ({ label, ...props }: InputProps) => {
  const [text, setText] = useState('');
  const ref = React.createRef<HTMLInputElement>();
  const onClickInput = () => ref.current?.focus();

  return (
    <div
      className={`${styles.container} ${text ? styles['has-text'] : ''}`}
      onClick={onClickInput}
      data-testid={'container-elem'}>
      <label data-testid={'label-elem'}>{label}</label>
      <input
        {...props}
        placeholder={label}
        onChange={(e) => {
          setText(e.target.value);
          props.onChange && props.onChange(e);
        }}
        ref={ref}
        data-testid={'input-elem'}
      />
    </div>
  );
};

export default Index;
