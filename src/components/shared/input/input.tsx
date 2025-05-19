import { clsx } from 'clsx';

import styles from './input.module.css';
import { InputProps } from './input.types';

const Input = ({ errorMessage, ...rest }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={clsx(styles.inputField, { [styles.inputFieldError]: errorMessage })}
        {...rest}
      />

      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
