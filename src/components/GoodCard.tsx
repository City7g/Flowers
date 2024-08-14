import ShopNow from '@/app/ui/buttons/shop-now'
import Image from 'next/image'
import './../styles/base/_good-card.scss'

import gsap from 'gsap'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'

export default function GoodCard({ imgSrc, title, reverse }) {
  useGSAP(() => {
    gsap.fromTo(
      '.good-card__image img',
      {
        scale: 1.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
      }
    )

    gsap.fromTo(
      '.good-card__title',
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }
    )
  })

  return (
    <div className={`good-card ${reverse ? 'good-card--reverse' : ''}`}>
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
    </div>
  )
}
