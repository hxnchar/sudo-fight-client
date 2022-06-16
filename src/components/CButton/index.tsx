import React, { ReactNode } from 'react';
import styles from './CButton.module.scss';

interface IButton {
  children?: ReactNode;
  type: ButtonType;
  isNegative?: boolean;
}

export enum ButtonType {
  Filled,
  Outlined,
  Transparent,
}

const CButton = ({ children, type, isNegative, ...props }: IButton) => {
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
  switch (type) {
    case ButtonType.Filled:
      buttonClass = styles['button-filled'];
      break;
    case ButtonType.Outlined:
      buttonClass = styles['button-outlined'];
      break;
    case ButtonType.Transparent:
      buttonClass = styles['button-transparent'];
      break;
    default:
      buttonClass = styles['button-filled'];
      break;
  }
  return (
    <button
      className={`${buttonClass} ${isNegative ? 'negative' : ''}`}
      {...props}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default CButton;
