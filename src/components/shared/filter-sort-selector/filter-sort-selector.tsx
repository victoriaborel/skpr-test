'use client';

import { clsx } from 'clsx';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';

import Triangle from '@svg/triangle.svg';

import styles from './filter-sort-selector.module.css';
import { FilterSortOption, SelectorProps } from './filter-sort-selector.types';
import { Dropdown } from '@components/shared';

const FilterSortSelector = ({ type, label, options, onChange, selectedOption }: SelectorProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (option: FilterSortOption) => {
    onChange(option);
    setOpen(false);
  };

  const handleReset = () => {
    if (type == 'filter') onChange(null);

    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.selectContainer} onClick={toggleOpen}>
        <div className={styles.label}>
          <span>{label}</span>

          {selectedOption && <span className={styles.selectedOption}>{selectedOption.label}</span>}
        </div>

        <Triangle />
      </button>

      <AnimatePresence>
        {open && (
          <Dropdown className={styles.dropdown} close={() => setOpen(false)}>
            <ul>
              {options.map((option) => (
                <li
                  key={option.value}
                  className={clsx({ [styles.selected]: selectedOption?.value === option.value })}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>

            {type === 'filter' && (
              <button className={styles.clearButton} onClick={handleReset}>
                Сбросить
              </button>
            )}
          </Dropdown>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterSortSelector;
