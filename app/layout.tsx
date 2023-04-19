import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import './globals.css'

export const metadata = {
  title: 'Landing Page',
  description: 'NextJS Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> {children}</body>
    </html>
  )
}
