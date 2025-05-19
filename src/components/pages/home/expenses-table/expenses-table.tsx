'use client';

import { formatDate, formatRuble } from '@helpers';
import { useMediaQuery } from 'usehooks-ts';

import Delete from '@svg/delete.svg';
import Edit from '@svg/edit.svg';

import styles from './expenses-table.module.css';
import { ExpensesTableProps } from './expenses-table.types';

import { CATEGORY_LABELS } from '@constants';

const ExpensesTable = ({ data, onDelete }: ExpensesTableProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        {!isMobile && (
          <colgroup>
            <col className={styles.col1} />
            <col className={styles.col2} />
            <col className={styles.col3} />
            <col className={styles.col4} />
            <col className={styles.col5} />
          </colgroup>
        )}

        <thead>
          <tr>
            <th>Описание</th>
            <th>Категория</th>
            <th>Дата</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={5} className={styles.noExpensesMessage}>
                Нет расходов с такими условиями. <br /> Попробуйте поменять критерии.
              </td>
            </tr>
          ) : (
            data.map((expense) => (
              <tr key={expense.id}>
                <td>
                  <span className={styles.cellTitle}>Описание</span> {expense.description}
                </td>
                <td>
                  <span className={styles.cellTitle}>Категория</span>
                  {CATEGORY_LABELS[expense.category]}
                </td>
                <td>
                  <span className={styles.cellTitle}>Дата</span> {formatDate(expense.date)}
                </td>
                <td>
                  <span className={styles.cellTitle}>Сумма</span> {formatRuble(expense.amount)}
                </td>
                <td>
                  <div className={styles.actions}>
                    <button>
                      <Edit />
                    </button>

                    <button onClick={() => onDelete(expense.id)}>
                      <Delete />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
