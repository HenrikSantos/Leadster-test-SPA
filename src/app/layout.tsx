import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: [ 'latin' ] });

export const metadata = {
  title: 'Leadster',
  description: 'Desafio técnico para a vaga de frontend developer na Leadster, feito com Next.js e Tailwind.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
