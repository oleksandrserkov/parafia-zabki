'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

const FB_URL =
  'https://www.facebook.com/people/Parafia-greckokatolicka-pw-narodzenia-NMP-w-Z%C4%85bkach/61556733593364/'
const MAPS_URL =
  'https://maps.google.com/?q=Parafia+Greckokatolicka+Narodzenia+NMP+Ząbki+Polska'

const CONTENT = {
  pl: {
    nav: {
      brand: 'Parafia',
      links: ['O Parafii', 'Nabożeństwa', 'Dojazd', 'Kontakt'],
    },
    hero: {
      eyebrow: 'Parafia Greckokatolicka',
      line1: 'Narodzenie Najświętszej',
      line2: 'Maryi Panny',
      location: 'Ząbki koło Warszawy · Polska',
    },
    about: {
      heading: 'O Parafii',
      lead: 'Jesteśmy parafią greckokatolicką pw. Narodzenia Najświętszej Maryi Panny w Ząbkach koło Warszawy. Tradycja wschodnia, żywa liturgia i otwarta wspólnota — zapraszamy wszystkich poszukujących Boga.',
      cardHeading: 'Tradycja Wschodnia',
      cardText:
        'Kościół greckokatolicki łączy bogatą wschodnią tradycję liturgiczną z pełną jednością ze Stolicą Apostolską w Rzymie.',
    },
    services: {
      heading: 'Nabożeństwa',
      schedule: [
        { day: 'Niedziela', time: '10:00', name: 'Boska Liturgia' },
        { day: 'Środa', time: '18:30', name: 'Nieszpory' },
        { day: 'Piątek', time: '18:30', name: 'Akatyst' },
      ],
      note: 'Prosimy śledzić nasz profil na Facebooku w sprawie aktualnego harmonogramu.',
    },
    location: {
      heading: 'Dojazd',
      city: 'Ząbki, woj. mazowieckie',
      near: 'Blisko Warszawy',
      mapLink: 'Otwórz mapę',
    },
    contact: {
      heading: 'Kontakt',
      nameLabel: 'Osoba kontaktowa',
      emailLabel: 'E-mail',
      fbLabel: 'Facebook',
      fbText: 'Odwiedź nasz profil',
    },
    footer: '© 2025 Parafia Greckokatolicka pw. Narodzenia NMP w Ząbkach',
  },
  en: {
    nav: {
      brand: 'Parish',
      links: ['About', 'Services', 'Location', 'Contact'],
    },
    hero: {
      eyebrow: 'Greek Catholic Parish',
      line1: 'Nativity of the Most',
      line2: 'Holy Virgin Mary',
      location: 'Ząbki, near Warsaw · Poland',
    },
    about: {
      heading: 'About the Parish',
      lead: 'We are the Greek Catholic Parish of the Nativity of the Most Holy Virgin Mary in Ząbki, near Warsaw. Eastern tradition, vibrant liturgy, and an open community — all who seek God are welcome.',
      cardHeading: 'Eastern Tradition',
      cardText:
        'The Greek Catholic Church unites the rich Eastern liturgical tradition with full communion with the Holy See in Rome.',
    },
    services: {
      heading: 'Services',
      schedule: [
        { day: 'Sunday', time: '10:00', name: 'Divine Liturgy' },
        { day: 'Wednesday', time: '18:30', name: 'Vespers' },
        { day: 'Friday', time: '18:30', name: 'Akathist' },
      ],
      note: 'Please follow our Facebook page for the current service schedule.',
    },
    location: {
      heading: 'How to Find Us',
      city: 'Ząbki, Masovian Voivodeship',
      near: 'Near Warsaw, Poland',
      mapLink: 'Open map',
    },
    contact: {
      heading: 'Contact',
      nameLabel: 'Contact person',
      emailLabel: 'Email',
      fbLabel: 'Facebook',
      fbText: 'Visit our profile',
    },
    footer: '© 2025 Greek Catholic Parish of the Nativity of the Holy Virgin Mary in Ząbki',
  },
}

function OrnamentSVG() {
  return (
    <svg viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="0" y1="12" x2="112" y2="12" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.55" />
      <path d="M115 12 L121 5.5 L127 12 L121 18.5 Z" fill="currentColor" fillOpacity="0.7" />
      <rect x="137" y="2" width="2" height="20" fill="currentColor" />
      <rect x="131" y="10" width="14" height="2" fill="currentColor" />
      <path d="M153 12 L159 5.5 L165 12 L159 18.5 Z" fill="currentColor" fillOpacity="0.7" />
      <line x1="168" y1="12" x2="280" y2="12" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.55" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 14 22" fill="currentColor" width="13" height="20" aria-hidden="true">
      <rect x="6" y="0" width="2" height="22" />
      <rect x="0" y="7" width="14" height="2" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function Home() {
  const [lang, setLang] = useState('pl')
  const [scrolled, setScrolled] = useState(false)
  const c = CONTENT[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const sectionIds = ['about', 'services', 'location', 'contact']

  return (
    <>
      {/* Navigation */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navInner}>
          <div className={styles.navBrand}>
            <CrossIcon />
            <span>{c.nav.brand}</span>
          </div>
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
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{c.hero.eyebrow}</p>
          <div className={styles.ornament}>
            <OrnamentSVG />
          </div>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>{c.hero.line1}</span>
            <span className={`${styles.titleLine} ${styles.titleLineGold}`}>{c.hero.line2}</span>
          </h1>
          <div className={styles.ornamentBot}>
            <OrnamentSVG />
          </div>
          <p className={styles.heroLocation}>{c.hero.location}</p>
        </div>
        <div className={styles.scrollHint} aria-hidden="true">↓</div>
      </section>

      {/* About */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLine} />
            <h2 className={styles.sectionHeading}>{c.about.heading}</h2>
            <span className={styles.sectionLine} />
          </div>
          <p className={styles.lead}>{c.about.lead}</p>
          <div className={styles.traditionCard}>
            <p className={styles.traditionHeading}>{c.about.cardHeading}</p>
            <p className={styles.traditionText}>{c.about.cardText}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLine} />
            <h2 className={styles.sectionHeading}>{c.services.heading}</h2>
            <span className={styles.sectionLine} />
          </div>
          <div className={styles.schedule}>
            {c.services.schedule.map((item, i) => (
              <div key={i} className={styles.scheduleRow}>
                <span className={styles.scheduleDay}>{item.day}</span>
                <span className={styles.scheduleTime}>{item.time}</span>
                <span className={styles.scheduleName}>{item.name}</span>
              </div>
            ))}
          </div>
          <p className={styles.note}>{c.services.note}</p>
        </div>
      </section>

      {/* Location */}
      <section id="location" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLine} />
            <h2 className={styles.sectionHeading}>{c.location.heading}</h2>
            <span className={styles.sectionLine} />
          </div>
          <div className={styles.locationCard}>
            <div>
              <p className={styles.locationCity}>{c.location.city}</p>
              <p className={styles.locationNear}>{c.location.near}</p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              {c.location.mapLink} →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLine} />
            <h2 className={styles.sectionHeading}>{c.contact.heading}</h2>
            <span className={styles.sectionLine} />
          </div>
          <div className={styles.contactWrapper}>
            <div className={styles.contactGrid}>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>{c.contact.nameLabel}</span>
                <span className={styles.contactValue}>Valeriia Brodzki</span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>{c.contact.emailLabel}</span>
                <a
                  href="mailto:parafia.zabki.nmp@gmail.com"
                  className={`${styles.contactValue} ${styles.contactLink}`}
                >
                  parafia.zabki.nmp@gmail.com
                </a>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactLabel}>{c.contact.fbLabel}</span>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.contactValue} ${styles.contactLink}`}
                >
                  {c.contact.fbText}
                </a>
              </div>
            </div>
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fbButton}
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <CrossIcon />
        <p className={styles.footerText}>{c.footer}</p>
      </footer>
    </>
  )
}
