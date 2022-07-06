import React, { ComponentProps, ReactNode } from 'react';
import styles from './CButton.module.scss';

const Decor = {
  filled: styles['button-filled'],
  outlined: styles['button-outlined'],
  transparent: styles['button-transparent'],
};

type ButtonDecor = keyof typeof Decor;

interface IButton {
  children?: ReactNode;
  decor: ButtonDecor;
  isNegative?: boolean;
}

const CButton = ({ children, decor, isNegative, ...props }: IButton & ComponentProps<'button'>) => {
  const ref = React.createRef<HTMLButtonElement>();
  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    ref.current?.style.setProperty('--pointer-x', `${e.nativeEvent.offsetX}px`);
    ref.current?.style.setProperty('--pointer-y', `${e.nativeEvent.offsetY}px`);
  };
  const onMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    ref.current?.style.setProperty('--pointer-y', `${e.nativeEvent.offsetY}px`);
    ref.current?.style.setProperty('--pointer-x', `${e.nativeEvent.offsetX}px`);
  };
  return (
    <button
      className={`${Decor[decor]} ${isNegative ? styles.negative : ''}`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...props}
      ref={ref}
      data-testid={'btn-elem'}
    >
      {children}
    </button>
  );
};

export default CButton;
