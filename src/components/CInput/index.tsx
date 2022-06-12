import React, { FC, InputHTMLAttributes, useState } from 'react';
import './CInput.scss';

const Index = ({ label, ...props }: InputProps) => {
  const [text, setText] = useState('');

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const onClickInput = () => document.getElementById('input')?.focus();

  return (
    <div className={`custom-input-container ${text ? 'has-text' : ''}`} onClick={onClickInput}>
      <label>{label}</label>
      <input {...props} onChange={onTextChange} id="input" />
    </div>
  );
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default Index;
