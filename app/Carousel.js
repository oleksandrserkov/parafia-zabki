'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './carousel.module.css'

const IMAGES = [
  '/event2.jpg',
  '/event4.jpg',
  '/event5.jpg',
  '/event6.jpg',
  '/event1.jpg',
  '/event3.jpg',
]

export default function Carousel() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + IMAGES.length) % IMAGES.length)
  const next = () => setIdx(i => (i + 1) % IMAGES.length)

  return (
    <div className={styles.wrap}>
      <button className={styles.btn} onClick={prev} aria-label="Previous">&#8249;</button>
      <div className={styles.imgWrap}>
        <Image
          src={IMAGES[idx]}
          alt={`Zdjęcie ${idx + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          priority={idx === 0}
        />
      </div>
      <button className={styles.btn} onClick={next} aria-label="Next">&#8250;</button>
      <p className={styles.counter}>{idx + 1} / {IMAGES.length}</p>
    </div>
  )
}
