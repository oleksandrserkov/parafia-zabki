'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const FB_URL = 'https://www.facebook.com/people/Parafia-greckokatolicka-pw-narodzenia-NMP-w-Z%C4%85bkach/61556733593364/'
const MAPS_URL = 'https://maps.google.com/?q=ul.+Powsta%C5%84c%C3%B3w+30+Z%C4%85bki+Polska'

const CONTENT = {
  pl: {
    eyebrow: 'Parafia Greckokatolicka',
    title: 'Narodzenie Najświętszej Maryi Panny',
    location: 'Ząbki koło Warszawy',
    about: {
      heading: 'O Parafii',
      text: 'Jesteśmy parafią greckokatolicką pw. Narodzenia Najświętszej Maryi Panny w Ząbkach koło Warszawy. Kościół greckokatolicki łączy wschodnią tradycję liturgiczną z jednością ze Stolicą Apostolską w Rzymie. Zapraszamy wszystkich.',
    },
    history: {
      heading: 'Historia',
      text: 'Od 1 kwietnia 2018 r., przy Parafii Rzymskokatolickiej Zesłania Ducha Świętego w Ząbkach (ul. Powstańców 30, 05-091), rozpoczęły się stałe nabożeństwa Kościoła Greckokatolickiego w Polsce w języku ukraińskim, w celu duchowego wsparcia chrześcijan obrządku wschodniego zamieszkałych i pracujących w tych okolicach.',
      ukrainian: 'Від 1 квітня 2018 р.Б., при Римо-Католицькій парафії Зіслання Святого Духа, що знаходиться у Зомбках (Ząbkach) вул. Powstańców 30, 05-091, розпочинаються постійні Богослужіння Греко-Католицької Церкви у Польщі українською мовою з метою духовної підтримки потребуючих християн Східного обряду, що проживають та працюють в цих околицях.',
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
    events: {
      heading: 'Ogłoszenia i wydarzenia',
      text: 'Aktualne ogłoszenia i wydarzenia parafialne znajdziesz na naszej stronie na Facebooku.',
      linkLabel: 'Zobacz na Facebooku →',
    },
    contact: {
      heading: 'Kontakt',
      rows: [
        { label: 'Osoba:', value: 'Valeriia Brodzki', href: null },
        { label: 'Tel:', value: '+48 570 443 757', href: 'tel:+48570443757' },
        { label: 'E-mail:', value: 'parafia.zabki.nmp@gmail.com', href: 'mailto:parafia.zabki.nmp@gmail.com' },
        { label: 'Adres:', value: 'ul. Powstańców 30, 05-091 Ząbki', href: MAPS_URL },
        { label: 'Facebook:', value: 'Profil parafii', href: FB_URL },
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
    history: {
      heading: 'History',
      text: 'From April 1, 2018, at the Roman Catholic Parish of the Descent of the Holy Spirit in Ząbki (ul. Powstańców 30, 05-091), regular services of the Greek Catholic Church in Poland began in the Ukrainian language, providing spiritual support for Eastern Rite Christians living and working in the area.',
      ukrainian: 'Від 1 квітня 2018 р.Б., при Римо-Католицькій парафії Зіслання Святого Духа, що знаходиться у Зомбках (Ząbkach) вул. Powstańców 30, 05-091, розпочинаються постійні Богослужіння Греко-Католицької Церкви у Польщі українською мовою з метою духовної підтримки потребуючих християн Східного обряду, що проживають та працюють в цих околицях.',
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
    events: {
      heading: 'Announcements & Events',
      text: 'Current parish announcements and upcoming events are posted on our Facebook page.',
      linkLabel: 'View on Facebook →',
    },
    contact: {
      heading: 'Contact',
      rows: [
        { label: 'Person:', value: 'Valeriia Brodzki', href: null },
        { label: 'Phone:', value: '+48 570 443 757', href: 'tel:+48570443757' },
        { label: 'Email:', value: 'parafia.zabki.nmp@gmail.com', href: 'mailto:parafia.zabki.nmp@gmail.com' },
        { label: 'Address:', value: 'ul. Powstańców 30, 05-091 Ząbki', href: MAPS_URL },
        { label: 'Facebook:', value: 'Parish profile', href: FB_URL },
      ],
    },
    footer: 'Copyright © 2026 Greek Catholic Parish of the Nativity of the Holy Virgin Mary in Ząbki',
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

      <h2 className={styles.sectionTitle}>{c.history.heading}</h2>
      <p className={styles.bodyText}>{c.history.text}</p>
      <br />
      <p className={styles.ukrainian}>{c.history.ukrainian}</p>

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

      <h2 className={styles.sectionTitle}>{c.events.heading}</h2>
      <p className={styles.bodyText}>{c.events.text}</p>
      <p style={{ marginTop: '8px' }}>
        <a href={FB_URL} target="_blank" rel="noopener noreferrer">{c.events.linkLabel}</a>
      </p>

      <hr />

      <h2 className={styles.sectionTitle}>{c.contact.heading}</h2>
      <table className={styles.contactTable}>
        <tbody>
          {c.contact.rows.map((row, i) => (
            <tr key={i}>
              <td>{row.label}</td>
              <td>
                {row.href
                  ? <a href={row.href} target={row.href.startsWith('mailto') || row.href.startsWith('tel') ? undefined : '_blank'} rel="noopener noreferrer">{row.value}</a>
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
