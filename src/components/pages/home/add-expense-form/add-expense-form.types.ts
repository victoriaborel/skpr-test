export interface AddExpenseFormProps {
  onAdd: (formValues: AddExpenseFormValues) => void;
}

export interface AddExpenseFormValues {
  description: string;
  category: string;
  date: Date | null;
  amount: string;
}
