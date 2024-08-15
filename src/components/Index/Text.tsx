'use client'

import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function IndexText() {
  const container = useRef()

  useGSAP(
    () => {
      const title = document.querySelector('.text-section__title')

      gsap.from(title, {
        opacity: 0,
        y: 100,
        rotate: 10,
        duration: 0.6,
        scrollTrigger: {
          trigger: title,
        },
      })
    },
    {
      scope: container,
    }
  )

  return (
    <section ref={container} className="text-section">
      <div className="anim-wrap">
        <h2 className="title-h2 text-section__title">Our Service</h2>
      </div>
    </section>
  )
}
