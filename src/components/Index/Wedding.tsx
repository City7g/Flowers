'use client'

import { gsap } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function IndexWedding() {
  const container = useRef()

  useGSAP(
    () => {
      const subtitle = document.querySelector('.wedding__subtitle')
      const title = document.querySelector('.wedding__title')
      const text = document.querySelector('.wedding__text')
      const btn = document.querySelector('.wedding__btn')

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

      gsap.from(btn, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: btn,
        },
      })
    },
    {
      scope: container,
    }
  )

  return (
    <div ref={container} className="wedding">
      <div className="wedding__content">
        <div className="anim-wrap">
          <h3 className="text-overline wedding__subtitle">service</h3>
        </div>

        <div className="anim-wrap">
          <h2 className="title-h2 wedding__title">Wedding & Event Decor</h2>
        </div>

        <div className="anim-wrap">
          <p className="text-body wedding__text">
            Let our team of expert florists and designers create stunning,
            on-trend floral décor for your special day. Trust us to bring your
            vision to life.
          </p>
        </div>

        <button className="btn-tertiary wedding__btn">Inquire Now</button>
      </div>
    </div>
  )
}
