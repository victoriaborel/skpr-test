import { ReactNode } from 'react';

import { CATEGORY_OPTIONS } from '@constants';

export interface Option {
  label: string;
  value: string;
  icon?: ReactNode;
}

export type Category = (typeof CATEGORY_OPTIONS)[number]['value'];

export interface Expense {
  id: string;
  description: string;
  category: Category;
  amount: number;
  date: string;
}
