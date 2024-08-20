'use client'

import { gsap } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function AboutDiscover() {
  const container = useRef()

  useGSAP(() => {
    const title = container.current.querySelector('.text-section__title')
    const text = container.current.querySelector('.text-section__text')
    const btn = container.current.querySelector('.text-section__btn')

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
        trigger: btn.parentNode,
      },
    })
  })

  return (
    <section ref={container} className="text-section">
      <div className="anim-wrap">
        <h2 className="title-h2 text-section__title">
          Discover Our Beautiful Bouquets
        </h2>
      </div>

      <div className="anim-wrap">
        <p className="text-body text-section__text">
          Explore our collection of exquisite bouquets and surprise your loved
          ones with the perfect gift. Click the button below to start shopping
        </p>
      </div>

      <div className="anim-wrap">
        <button className="btn-primary text-section__btn">shop now</button>
      </div>
    </section>
  )
}
