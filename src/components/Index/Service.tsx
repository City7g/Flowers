'use client'

import { gsap } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import image from '../../../public/service.png'
import Image from 'next/image'

export default function IndexService() {
  const container = useRef()

  useGSAP(
    () => {
      const subtitle = document.querySelector('.about-first__subtitle')
      const title = document.querySelector('.about-first__title')
      const text = document.querySelector('.about-first__text')
      const btn = document.querySelector('.about-first__btn')
      const image = document.querySelector('.about-first__img')

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

      gsap.from(image, {
        opacity: 0,
        scale: 1.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: image,
        },
      })
    },
    {
      scope: container,
    }
  )

  return (
    <div ref={container} className="about-first about-first--reverse">
      <div className="anim-wrap about-first__image">
        <Image src={image} alt="" className="about-first__img" />
      </div>

      <div className="about-first__content">
        <div className="anim-wrap">
          <h3 className="text-overline about-first__subtitle">Service</h3>
        </div>

        <div className="anim-wrap">
          <h2 className="title-h2 about-first__title">Flower Subcriptions</h2>
        </div>

        <div className="anim-wrap">
          <p className="text-body about-first__text">
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
        </div>

        <button className="btn-secondary about-first__btn">
          Subscribe Now
        </button>
      </div>
    </div>
  )
}
