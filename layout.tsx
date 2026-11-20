import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'MAKTAB OVOZI — Respublika media platformasi',
  description: 'Har bir maktabda media jamoa, har bir o‘quvchiga teng imkoniyat!'
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uz"><body>{children}</body></html>;
}
