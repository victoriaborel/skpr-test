'use client';

import { clsx } from 'clsx';
import { compareAsc, compareDesc } from 'date-fns';
import React, { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';

import Cross from '@svg/cross.svg';
import Plus from '@svg/plus.svg';

import { Expense } from '@types';

import styles from './page.module.css';
import { AddExpenseForm, ExpensesTable } from '@components/pages/home';
import { AddExpenseFormValues } from '@components/pages/home/add-expense-form/add-expense-form.types';
import { Button, FilterSortSelector, Loader } from '@components/shared';
import { FilterSortOption } from '@components/shared/filter-sort-selector/filter-sort-selector.types';

import { CATEGORY_OPTIONS, SORT_OPTIONS } from '@constants';

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<FilterSortOption | null>(null);
  const [sort, setSort] = useState<FilterSortOption>(SORT_OPTIONS[0]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const isDesktop = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('/mock-data.json');
      const data = await response.json();
      setExpenses(data);
      setLoading(false);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const filteredExpenses = useMemo(() => {
    return categoryFilter === null
      ? expenses
      : expenses.filter((expense) => expense.category === categoryFilter.value);
  }, [expenses, categoryFilter]);

  const sortedExpenses = useMemo(() => {
    const direction = sort.value.split('-')[1];

    return [...filteredExpenses].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return direction === 'asc' ? compareAsc(dateA, dateB) : compareDesc(dateA, dateB);
    });
  }, [filteredExpenses, sort]);

  const handleDelete = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleAdd = ({ description, category, amount, date }: AddExpenseFormValues) => {
    const newExpense: Expense = {
      id: uuidv4(),
      description,
      category,
      date: (date as Date).toISOString(),
      amount: parseFloat(amount),
    };

    setExpenses((prev) => [...prev, newExpense]);
    setOpen(false);
  };

  const openAddExpense = () => {
    setOpen(true);
  };

  const closeAddExpense = () => {
    setOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Мои расходы</h1>

      <div className={styles.mainContainer}>
        <section className={styles.left}>
          <div className={styles.leftHead}>
            <h2 className={styles.subtitle}>Таблица расходов</h2>

            <div className={styles.tableActions}>
              <div className={styles.filterSortControls}>
                <FilterSortSelector
                  type="filter"
                  label={isDesktop ? 'Фильтровать по категории' : 'Категория'}
                  selectedOption={categoryFilter}
                  onChange={setCategoryFilter}
                  options={CATEGORY_OPTIONS}
                />

                <FilterSortSelector
                  type="sort"
                  label="Сортировать по"
                  selectedOption={sort}
                  onChange={setSort}
                  options={SORT_OPTIONS}
                />
              </div>

              <Button className={styles.openAddExpense} onClick={openAddExpense}>
                <span>Добавить новый расход</span>

                <Plus />
              </Button>
            </div>
          </div>

          <ExpensesTable data={sortedExpenses} onDelete={handleDelete} />
        </section>

        <aside className={clsx(styles.right, { [styles.open]: open })}>
          <h2 className={styles.subtitle}>Новый расход</h2>

          <AddExpenseForm onAdd={handleAdd} />

          <button className={styles.closeButton} onClick={closeAddExpense}>
            <Cross />
          </button>
        </aside>
      </div>
    </main>
  );
}
