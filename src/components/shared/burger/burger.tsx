'use client';

import { clsx } from 'clsx';

import styles from './burger.module.css';

interface BurgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const Burger = ({ isOpen, className, onClick }: BurgerProps) => {
  return (
    <button className={clsx(styles.burger, className, { [styles.open]: isOpen })} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 8.35001H20" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 13.35H20" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 18.35H20" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </button>
  );
};

export default Burger;
