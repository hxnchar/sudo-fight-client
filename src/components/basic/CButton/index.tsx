import React, { ComponentProps, ReactNode } from 'react';
import styles from './CButton.module.scss';

interface IButton {
  children?: ReactNode;
  decor: ButtonDecor;
  isNegative?: boolean;
}

export enum ButtonDecor {
  Filled,
  Outlined,
  Transparent,
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
  let buttonClass;
  switch (decor) {
    case ButtonDecor.Filled:
      buttonClass = styles['button-filled'];
      break;
    case ButtonDecor.Outlined:
      buttonClass = styles['button-outlined'];
      break;
    case ButtonDecor.Transparent:
      buttonClass = styles['button-transparent'];
      break;
    default:
      buttonClass = styles['button-filled'];
      break;
  }
  return (
    <button
      className={`${buttonClass} ${isNegative ? styles.negative : ''}`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default CButton;
