'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Logo from '@svg/logo.svg';

import { LINKS } from './header.constants';
import styles from './header.module.css';
import { Burger } from '@components/shared';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const handleLogout = () => {
    console.log('User logged out!');
  };

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>

      <div className={clsx(styles.menu, { [styles.open]: isOpen })}>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            {LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={clsx(styles.navLink, {
                    [styles.active]: pathname === link.href || pathname.startsWith(`${link.href}/`),
                  })}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button onClick={handleLogout} className={styles.logout}>
          Выйти
        </button>
      </div>

      <Burger
        className={styles.burger}
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </div>
  );
};

export default Header;
