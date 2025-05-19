'use client';

import { clsx } from 'clsx';
import { ru } from 'date-fns/locale';
import DatePicker from 'react-datepicker';

import styles from './date-input.module.css';
import { DateInputProps } from './date-input.types';

const DateInput = ({ id, name, selected, placeholder, onChange, errorMessage }: DateInputProps) => {
  return (
    <div className={styles.dateInputWrapper}>
      <DatePicker
        id={id}
        name={name}
        selected={selected}
        onChange={onChange}
        locale={ru}
        dateFormat="dd.MM.YYYY"
        maxDate={new Date()}
        placeholderText={placeholder}
        className={clsx({ error: errorMessage })}
      />

      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default DateInput;
