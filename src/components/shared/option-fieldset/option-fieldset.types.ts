import { ChangeEvent } from 'react';

import { Category, Option } from '@types';

export interface OptionFieldsetProps {
  legendText: string;
  options: Option[];
  name?: string;
  type?: 'checkbox' | 'radio';
  legendClassName?: string;
  selectedOption: Category;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
