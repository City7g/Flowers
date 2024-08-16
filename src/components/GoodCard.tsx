import ShopNow from '@/app/ui/buttons/shop-now'
import Image from 'next/image'
import './../styles/base/_good-card.scss'

import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Link from 'next/link'

export default function GoodCard({ imgSrc, title, reverse }) {
  const card = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()

    ScrollTrigger.create({
      trigger: card.current,
      animation: tl
        .from(card.current.querySelector('.good-card__image img'), {
          scale: 1.5,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          card.current.querySelector('.good-card__title'),
          {
            opacity: 0,
            y: 50,
          },
          0.3
        )
        .fromTo(
          card.current.querySelector('.shop-now-btn'),
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
          0.5
        ),
    })
  })

  return (
    <Link
      href={`/product/${title.toLowerCase().replaceAll(' ', '-')}`}
      ref={card}
      className={`good-card ${reverse ? 'good-card--reverse' : ''}`}
    >
      <div className="good-card__content">
        <h3 className="title-h3 good-card__title">{title}</h3>
        <ShopNow reverse={reverse} />
      </div>

      <div className="good-card__image">
        <Image
          src={imgSrc}
          alt="good-card"
          layout="responsive"
          width={500}
          height={300}
        />
      </div>
    </Link>
  )
}
