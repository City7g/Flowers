'use client'

import { gsap } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function AboutText() {
  const container = useRef()

  useGSAP(
    () => {
      const subtitle = container.current.querySelector(
        '.text-section__subtitle'
      )
      const title = container.current.querySelector('.text-section__title')
      const text = container.current.querySelector('.text-section__text')

      gsap.from(subtitle, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: subtitle,
        },
      })

      gsap.from(title, {
        opacity: 0,
        y: 100,
        rotate: 10,
        duration: 0.6,
        scrollTrigger: {
          trigger: title,
        },
      })

      gsap.from(text, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: text,
        },
      })
    },
    { scope: container }
  )

  return (
    <section ref={container} className="text-section">
      <div className="anim-wrap">
        <h3 className="text-overline text-section__subtitle">OUR STORY</h3>
      </div>

      <div className="anim-wrap">
        <h2 className="title-h3 text-section__title">
          Our Founder&apos;s Passion
        </h2>
      </div>

      <div className="anim-wrap">
        <p className="text-body text-section__text">
          Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
          goal of bringing unique and exquisite bouquets to the people of Kyiv.
          Natalia has always had a passion for flowers and design, and his
          vision was to create a local floral studio that would specialize in
          the creation and delivery of fresh, beautiful, and distinctive
          bouquets.
        </p>
      </div>
    </section>
  )
}
