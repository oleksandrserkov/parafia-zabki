'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const MAPS_URL =
  'https://maps.google.com/?q=Parafia+Greckokatolicka+Narodzenia+NMP+Ząbki+Polska'

const CONTENT = {
  pl: {
    nav: { brand: 'Parafia · Ząbki', links: ['O Parafii', 'Nabożeństwa', 'Kontakt'] },
    hero: {
      eyebrow: 'Parafia Greckokatolicka',
      title: ['Narodzenie', 'Najświętszej', 'Maryi Panny'],
      location: 'Ząbki koło Warszawy',
    },
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
        { label: 'Osoba', value: 'Valeriia Brodzki', href: null },
        { label: 'E-mail', value: 'parafia.zabki.nmp@gmail.com', href: 'mailto:parafia.zabki.nmp@gmail.com' },
        { label: 'Adres', value: 'Ząbki, woj. mazowieckie', href: MAPS_URL },
      ],
    },
    footer: '© 2026 Parafia Greckokatolicka pw. Narodzenia NMP w Ząbkach',
  },
  en: {
    nav: { brand: 'Parish · Ząbki', links: ['About', 'Services', 'Contact'] },
    hero: {
      eyebrow: 'Greek Catholic Parish',
      title: ['Nativity of the', 'Most Holy', 'Virgin Mary'],
      location: 'Ząbki, near Warsaw, Poland',
    },
    about: {
      heading: 'About the Parish',
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
        { label: 'Person', value: 'Valeriia Brodzki', href: null },
        { label: 'Email', value: 'parafia.zabki.nmp@gmail.com', href: 'mailto:parafia.zabki.nmp@gmail.com' },
        { label: 'Address', value: 'Ząbki, Masovian Voivodeship', href: MAPS_URL },
      ],
    },
    footer: '© 2026 Greek Catholic Parish of the Nativity of the Holy Virgin Mary in Ząbki',
  },
}

const sectionIds = ['about', 'services', 'contact']

export default function Home() {
  const [lang, setLang] = useState('pl')
  const c = CONTENT[lang]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>{c.nav.brand}</span>
        <div className={styles.navLinks}>
          {c.nav.links.map((link, i) => (
            <a key={i} href={`#${sectionIds[i]}`} className={styles.navLink}>
              {link}
            </a>
          ))}
        </div>
        <button
          className={styles.langBtn}
          onClick={() => setLang(l => (l === 'pl' ? 'en' : 'pl'))}
          aria-label="Switch language"
        >
          <span className={lang === 'pl' ? styles.langActive : ''}>PL</span>
          <span className={styles.langSep}>·</span>
          <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
        </button>
      </nav>

      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>{c.hero.eyebrow}</p>
        <h1 className={styles.heroTitle}>
          {c.hero.title.map((line, i) => (
            <span key={i}>
              {i < c.hero.title.length - 1 ? line : <em>{line}</em>}
              {i < c.hero.title.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className={styles.heroLocation}>{c.hero.location}</p>
      </section>

      <div className={styles.photoStrip}>
        <Image
          src="/church.jpg"
          alt="Parafia Greckokatolicka w Ząbkach"
          width={1400}
          height={400}
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
          priority
        />
      </div>

      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{c.about.heading}</h2>
          <p className={styles.bodyText}>{c.about.text}</p>
        </div>
      </section>

      <section id="services" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{c.services.heading}</h2>
          <div className={styles.schedule}>
            {c.services.schedule.map((item, i) => (
              <div key={i} className={styles.scheduleRow}>
                <span className={styles.scheduleDay}>{item.day}</span>
                <span className={styles.scheduleTime}>{item.time}</span>
                <span className={styles.scheduleName}>{item.name}</span>
              </div>
            ))}
          </div>
          <p className={styles.scheduleNote}>{c.services.note}</p>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{c.contact.heading}</h2>
          <div className={styles.contactList}>
            {c.contact.rows.map((row, i) => (
              <div key={i} className={styles.contactRow}>
                <span className={styles.contactLabel}>{row.label}</span>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`${styles.contactValue} ${styles.contactLink}`}
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className={styles.contactValue}>{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>{c.footer}</p>
      </footer>
    </>
  )
}
