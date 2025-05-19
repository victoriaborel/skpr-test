import { Expense } from '@types';

export interface ExpensesTableProps {
  data: Expense[];
  onDelete: (id: string) => void;
}
