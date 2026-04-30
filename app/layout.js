import { Spectral } from 'next/font/google'
import './globals.css'

const spectral = Spectral({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fell',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'Parafia Greckokatolicka pw. Narodzenia NMP w Ząbkach',
  description: 'Parafia greckokatolicka pw. Narodzenia Najświętszej Maryi Panny w Ząbkach koło Warszawy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={spectral.variable}>{children}</body>
    </html>
  )
}
