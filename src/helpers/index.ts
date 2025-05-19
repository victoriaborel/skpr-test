import { format } from 'date-fns';

export const formatRuble = (amount: number): string => {
  return amount.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  });
};

export const formatDate = (date: string | Date) => {
  return format(new Date(date), 'dd.MM.yyyy');
};
