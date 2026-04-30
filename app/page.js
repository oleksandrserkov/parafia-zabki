'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const MAPS_URL =
  'https://maps.google.com/?q=Parafia+Greckokatolicka+Narodzenia+NMP+Zabki+Polska'

const CONTENT = {
  pl: {
    eyebrow: 'Parafia Greckokatolicka',
    title: 'Narodzenie Najświętszej Maryi Panny',
    location: 'Ząbki koło Warszawy',
    about: {
      heading: 'O Parafii',
      text: 'Jesteśmy parafią greckokatolicką pw. Narodzenia Najświętszej Maryi Panny w Ząbkach koło Warszawy. Kościół greckokatolicki łączy wschodnią tradycję liturgiczną z jednością ze Stolicą Apostolską w Rzymie. Zapraszamy wszystkich.',
    },
    services: {
      heading: 'Nabożeństwa',
      schedule: [
        { day: 'Niedziela', time: '10:00', name: 'Boska Liturgia' },
        { day: 'Środa', time: '18:30', name: 'Nieszpory' },
        { day: 'Piątek', time: '18:30', name: 'Akatyst' },
      ],
      note: 'W sprawie aktualnego harmonogramu prosimy o kontakt.',
    },
    contact: {
      heading: 'Kontakt',
      rows: [
        { label: 'Osoba:', value: 'Valeriia Brodzki', href: null },
        { label: 'Tel:', value: '+48 570 443 757', href: 'tel:+48570443757' },
        { label: 'E-mail:', value: 'parafia.zabki.nmp@gmail.com', href: 'mailto:parafia.zabki.nmp@gmail.com' },
        { label: 'Adres:', value: 'Ząbki, woj. mazowieckie', href: MAPS_URL },
      ],
    },
    footer: 'Copyright © 2026 Parafia Greckokatolicka pw. Narodzenia NMP w Ząbkach',
  },
  en: {
    eyebrow: 'Greek Catholic Parish',
    title: 'Nativity of the Most Holy Virgin Mary',
    location: 'Ząbki, near Warsaw, Poland',
    about: {
      heading: 'About',
      text: 'We are the Greek Catholic Parish of the Nativity of the Most Holy Virgin Mary in Ząbki, near Warsaw. The Greek Catholic Church unites Eastern liturgical tradition with full communion with the Holy See in Rome. All are welcome.',
    },
    services: {
      heading: 'Services',
      schedule: [
        { day: 'Sunday', time: '10:00', name: 'Divine Liturgy' },
        { day: 'Wednesday', time: '18:30', name: 'Vespers' },
        { day: 'Friday', time: '18:30', name: 'Akathist' },
      ],
      note: 'Please contact us for the current schedule.',
    },
    contact: {
      heading: 'Contact',
      rows: [
        { label: 'Person:', value: 'Valeriia Brodzki', href: null },
        { label: 'Phone:', value: '+48 570 443 757', href: 'tel:+48570443757' },
        { label: 'Email:', value: 'parafia.zabki.nmp@gmail.com', href: 'mailto:parafia.zabki.nmp@gmail.com' },
        { label: 'Address:', value: 'Ząbki, Masovian Voivodeship', href: MAPS_URL },
      ],
    },
    footer: 'Copyright © 2026 Greek Catholic Parish of the Nativity of the Holy Virgin Mary in Zą́bki',
  },
}

export default function Home() {
  const [lang, setLang] = useState('pl')
  const c = CONTENT[lang]

  useEffect(() => {
    const browserLang = navigator.language || ''
    if (!browserLang.startsWith('pl')) setLang('en')
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className={styles.page}>

      <div className={styles.langRow}>
        <button className={styles.langBtn} onClick={() => setLang(l => l === 'pl' ? 'en' : 'pl')}>
          <span className={lang === 'pl' ? styles.langActive : ''}>PL</span>
          <span className={styles.langSep}>|</span>
          <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
        </button>
      </div>

      <div className={styles.header}>
        <Image src="/favicon.webp" alt="Herb parafii" width={90} height={103} className={styles.crest} />
        <p className={styles.eyebrow}>{c.eyebrow}</p>
        <h1 className={styles.title}>{c.title}</h1>
        <p className={styles.location}>{c.location}</p>
      </div>

      <hr />

      <Image
        src="/church.jpg"
        alt="Parafia Greckokatolicka w Zabkach"
        width={750}
        height={220}
        className={styles.photo}
        priority
      />

      <hr />

      <h2 className={styles.sectionTitle}>{c.about.heading}</h2>
      <p className={styles.bodyText}>{c.about.text}</p>

      <hr />

      <h2 className={styles.sectionTitle}>{c.services.heading}</h2>
      <table className={styles.schedule}>
        <tbody>
          {c.services.schedule.map((item, i) => (
            <tr key={i}>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.scheduleNote}>{c.services.note}</p>

      <hr />

      <h2 className={styles.sectionTitle}>{c.contact.heading}</h2>
      <table className={styles.contactTable}>
        <tbody>
          {c.contact.rows.map((row, i) => (
            <tr key={i}>
              <td>{row.label}</td>
              <td>
                {row.href
                  ? <a href={row.href} target={row.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">{row.value}</a>
                  : row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <p className={styles.footer}>{c.footer}</p>

    </div>
  )
}
