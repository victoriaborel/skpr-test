import { AddExpenseFormValues } from './add-expense-form.types';

export const validateForm = (formValues: AddExpenseFormValues) => {
  const newErrors: { [key: string]: string } = {};

  if (!formValues.description) newErrors.description = 'Описание обязательно';
  if (!formValues.category) newErrors.category = 'Категория обязательна';
  if (!formValues.date) newErrors.date = 'Дата обязательна';
  if (!formValues.amount) {
    newErrors.amount = 'Сумма обязательна';
  } else if (isNaN(Number(formValues.amount)) || Number(formValues.amount) <= 0) {
    newErrors.amount = 'Сумма должна быть положительной';
  }

  return newErrors;
};
