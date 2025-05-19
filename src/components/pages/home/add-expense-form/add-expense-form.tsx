'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import { validateForm } from './add-expence-form.helpers';
import styles from './add-expense-form.module.css';
import { AddExpenseFormProps, AddExpenseFormValues } from './add-expense-form.types';
import { Button, DateInput, Input, OptionFieldset } from '@components/shared';

import { EXPENSE_OPTIONS } from '@constants/options';

const initialValues: AddExpenseFormValues = {
  description: '',
  category: '',
  date: null,
  amount: '',
};

const AddExpenseForm = ({ onAdd }: AddExpenseFormProps) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setFormValues({
      ...formValues,
      date,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm(formValues);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onAdd(formValues);
      reset();
    }
  };

  const reset = () => {
    setFormValues(initialValues);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <div className={styles.field}>
        <label htmlFor="description" className={styles.label}>
          Описание
        </label>

        <Input
          id="description"
          name="description"
          maxLength={20}
          placeholder="Введите описание"
          value={formValues.description}
          onChange={handleChange}
          errorMessage={errors.description}
        />
      </div>

      <OptionFieldset
        name="category"
        legendText="Категория"
        options={EXPENSE_OPTIONS}
        onChange={handleChange}
        selectedOption={formValues.category}
        legendClassName={styles.label}
        errorMessage={errors.category}
      />

      <div className={styles.field}>
        <label htmlFor="date" className={styles.label}>
          Дата
        </label>

        <DateInput
          id="date"
          name="date"
          placeholder="Введите дату"
          selected={formValues.date}
          onChange={handleDateChange}
          errorMessage={errors.date}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="amount" className={styles.label}>
          Сумма
        </label>

        <Input
          id="amount"
          type="number"
          name="amount"
          placeholder="Введите сумму"
          value={formValues.amount}
          onChange={handleChange}
          errorMessage={errors.amount}
        />
      </div>

      <Button type="submit">Добавить новый расход</Button>
    </form>
  );
};

export default AddExpenseForm;
