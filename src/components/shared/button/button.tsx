import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

const Button = ({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={clsx(className, styles.btn)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
