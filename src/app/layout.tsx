import type { Metadata, Viewport } from 'next';

import { Montserrat } from 'next/font/google';

import { Header } from '@components/shared';

import 'react-datepicker/dist/react-datepicker.css';
import '@styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Skypro Wallet',
  description:
    'Удобное приложение для контроля расходов и управления финансами. Ведите учёт трат, анализируйте категории и достигайте финансовых целей легко и эффективно.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={montserrat.className}>
      <body>
        <header>
          <Header />
        </header>

        {children}

        <footer />
      </body>
    </html>
  );
}
