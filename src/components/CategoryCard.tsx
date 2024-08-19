'use client'

import Image from 'next/image'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function CategoryCard({ title, price, img }) {
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
      <Image
        src={img}
        alt=""
        style={{ width: '100%', height: '100%' }}
        className="category-card__img"
      />

      <div className="category-card__content">
        <h6 className="title-h6 category-card__title">{title}</h6>
        <p className="text-caption category-card__price">price {price}$</p>
      </div>
    </div>
  )
}
