export interface DateInputProps {
  id?: string;
  name?: string;
  selected?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  errorMessage?: string;
}
