import { Cinzel, EB_Garamond } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const garamond = EB_Garamond({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-garamond',
  display: 'swap',
})

export const metadata = {
  title: 'Parafia Greckokatolicka pw. Narodzenia NMP w Ząbkach',
  description: 'Parafia greckokatolicka pw. Narodzenia Najświętszej Maryi Panny w Ząbkach koło Warszawy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${cinzel.variable} ${garamond.variable}`}>{children}</body>
    </html>
  )
}
