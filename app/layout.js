import './globals.css'

export const metadata = {
  title: 'Parafia Greckokatolicka pw. Narodzenia NMP w Zabkach',
  description: 'Parafia greckokatolicka pw. Narodzenia Najswietszej Maryi Panny w Zabkach kolo Warszawy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
