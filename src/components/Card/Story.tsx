'use client'

import Image from 'next/image'
import { gsap } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function StoryCard({ story: { id, title, text, img } }) {
  const card = useRef()

  useGSAP(
    () => {
      const title = card.current.querySelector('.story__title')
      const text = card.current.querySelector('.story__text')
      const img = card.current.querySelector('.story__img')

      gsap.from(title, {
        opacity: 0,
        y: 100,
        rotate: 10,
        duration: 0.6,
        scrollTrigger: {
          trigger: title.parentNode,
        },
      })

      gsap.from(text, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: text.parentNode,
        },
      })

      gsap.from(img, {
        scale: 1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: img.parentNode,
        },
      })
    },
    { scope: card }
  )

  return (
    <div ref={card} className="story">
      <div className="anim-wrap story__image">
        <Image src={img} alt="" className="story__img" />
      </div>

      <div className="story__content">
        <div className="anim-wrap">
          <h3 className="title-h3 story__title">{title}</h3>
        </div>

        <div className="anim-wrap">
          <p className="text-body story__text">{text}</p>
        </div>
      </div>
    </div>
  )
}
