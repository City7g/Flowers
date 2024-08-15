'use client'

import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function CategoryCard({ imgSrc, price, title }) {
  const card = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(card.current.querySelector('.category-card__img'), {
      scale: 1.5,
      opacity: 0,
      duration: 0.6,
    })
      .from(
        card.current.querySelector('.category-card__title'),
        {
          opacity: 0,
          y: 50,
        },
        0.3
      )
      .from(
        card.current.querySelector('.category-card__price'),
        {
          opacity: 0,
          y: 50,
        },
        0.5
      )

    ScrollTrigger.create({
      trigger: card.current,
      animation: tl,
    })
  })

  return (
    <div ref={card} className="category-card">
      <img className="category-card__img" src={imgSrc} alt="img" />
      <div className="category-card__content">
        <h6 className="title-h6 category-card__title">{title}</h6>
        <p className="text-caption category-card__price">price {price}$</p>
      </div>
    </div>
  )
}
