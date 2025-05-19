import { ReactNode } from 'react';

export interface DropdownProps {
  close: () => void;
  className?: string;
  children?: ReactNode;
}
