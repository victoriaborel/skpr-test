export interface FilterSortOption {
  value: string;
  label: string;
}

interface BaseSelectorProps {
  label: string;
  options: FilterSortOption[];
}

export type SelectorProps =
  | (BaseSelectorProps & {
      type: 'filter';
      selectedOption: FilterSortOption | null;
      onChange: (option: FilterSortOption | null) => void;
    })
  | (BaseSelectorProps & {
      type: 'sort';
      selectedOption: FilterSortOption;
      onChange: (option: FilterSortOption) => void;
    });
