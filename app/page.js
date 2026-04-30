'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Carousel from './Carousel'

const MAPS_URL = 'https://maps.google.com/?q=ul.+Powsta%C5%84c%C3%B3w+30+Z%C4%85bki+Polska'

const CONTENT = {
  pl: {
    eyebrow: 'Parafia Greckokatolicka',
    title: 'Narodzenie Najświętszej Maryi Panny',
    roots: 'Nabożeństwa w języku ukraińskim dla wspólnoty ukraińskiej w Polsce',
    location: 'Ząbki koło Warszawy',
    about: {
      heading: 'O Parafii',
      text: 'Jesteśmy parafią greckokatolicką pw. Narodzenia Najświętszej Maryi Panny w Ząbkach koło Warszawy. Kościół greckokatolicki łączy wschodnią tradycję liturgiczną z jednością ze Stolicą Apostolską w Rzymie. Zapraszamy wszystkich.',
    },
    history: {
      heading: 'Historia',
      text: 'Od 1 kwietnia 2018 r., przy Parafii Rzymskokatolickiej Zesłania Ducha Świętego w Ząbkach (ul. Powstańców 30, 05-091), rozpoczęły się stałe nabożeństwa Kościoła Greckokatolickiego w Polsce w języku ukraińskim, w celu duchowego wsparcia chrześcijan obrządku wschodniego zamieszkałych i pracujących w tych okolicach.',
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
    },
    eventPost: {
      heading: 'Spotkanie dekanatów warszawskiego i łódzkiego',
      body: 'Spotkanie dekanatów warszawskiego i łódzkiego z Metropolitą Eugeniuszem Popowyczem oraz ojcami-prelegentami.',
      topics: [
        '„Proboszcz. Rada Parafialna. Podstawy teologiczne. Porządek kanoniczny. Praktyka duszpasterska."',
        '„Duszpasterstwo rodzin w warunkach wojny."',
      ],
      topicsLabel: 'Tematy spotkania formacyjnego:',
      thanks: 'Dziękujemy wszystkim za aktywny udział.',
    },
    contact: {
      heading: 'Kontakt',
      rows: [
        { label: 'Osoba:', value: 'Valeriia Brodzki', href: null },
        { label: 'Tel:', value: '+48 570 443 757', href: 'tel:+48570443757' },
        { label: 'E-mail:', value: 'parafia.zabki.nmp@gmail.com', href: 'mailto:parafia.zabki.nmp@gmail.com' },
        { label: 'Adres:', value: 'ul. Powstańców 30, 05-091 Ząbki', href: MAPS_URL },
      ],
    },
    footer: 'Copyright © 2018 Parafia Greckokatolicka pw. Narodzenia NMP w Ząbkach',
  },
  en: {
    eyebrow: 'Greek Catholic Parish',
    title: 'Nativity of the Most Holy Virgin Mary',
    roots: 'Services in Ukrainian for the Ukrainian community in Poland',
    location: 'Ząbki, near Warsaw, Poland',
    about: {
      heading: 'About',
      text: 'We are the Greek Catholic Parish of the Nativity of the Most Holy Virgin Mary in Ząbki, near Warsaw. The Greek Catholic Church unites Eastern liturgical tradition with full communion with the Holy See in Rome. All are welcome.',
    },
    history: {
      heading: 'History',
      text: 'From April 1, 2018, at the Roman Catholic Parish of the Descent of the Holy Spirit in Ząbki (ul. Powstańców 30, 05-091), regular services of the Greek Catholic Church in Poland began in the Ukrainian language, providing spiritual support for Eastern Rite Christians living and working in the area.',
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
    },
    eventPost: {
      heading: 'Meeting of the Warsaw and Łódź Deaneries',
      body: 'Meeting of the Warsaw and Łódź Deaneries with Metropolitan Yevhen Popovych and the priest-lecturers.',
      topics: [
        '"The Parish Priest. Parish Council. Theological Foundations. Canon Law. Pastoral Practice."',
        '"Pastoral Care of Families in Wartime."',
      ],
      topicsLabel: 'Topics discussed at the formation meeting:',
      thanks: 'Thank you all for your active participation.',
    },
    contact: {
      heading: 'Contact',
      rows: [
        { label: 'Person:', value: 'Valeriia Brodzki', href: null },
        { label: 'Phone:', value: '+48 570 443 757', href: 'tel:+48570443757' },
        { label: 'Email:', value: 'parafia.zabki.nmp@gmail.com', href: 'mailto:parafia.zabki.nmp@gmail.com' },
        { label: 'Address:', value: 'ul. Powstańców 30, 05-091 Ząbki', href: MAPS_URL },
      ],
    },
    footer: 'Copyright © 2018 Greek Catholic Parish of the Nativity of the Holy Virgin Mary in Ząbki',
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

      <Image
        src="/church.jpg"
        alt="Parafia Greckokatolicka w Zabkach"
        width={750}
        height={200}
        className={styles.photo}
        priority
      />

      <div className={styles.body}>

        <h2 className={styles.sectionTitle}>{c.about.heading}</h2>
        <p className={styles.bodyText}>{c.about.text}</p>

        <hr />

        <h2 className={styles.sectionTitle}>{c.history.heading}</h2>
        <p className={styles.bodyText}>{c.history.text}</p>

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
        <Carousel />

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

      </div>

      <div className={styles.footer}>
        <p>{c.footer}</p>
        <p className={styles.counter}>Liczba odwiedzin: 004872</p>
        <p className={styles.ie}>Strona najlepiej wyświetla się w przeglądarce Internet Explorer 6.0 przy rozdzielczości 800x600</p>
      </div>

    </div>
  )
}
