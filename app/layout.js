import { Lora } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata = {
  title: 'Parafia Greckokatolicka pw. Narodzenia NMP w Ząbkach',
  description: 'Parafia greckokatolicka pw. Narodzenia Najświętszej Maryi Panny w Ząbkach koło Warszawy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={lora.variable}>{children}</body>
    </html>
  )
}
