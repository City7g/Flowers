'use client'

import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function ServiceContent({ modificator }) {
  const container = useRef()

  useGSAP(
    () => {
      const mainTitle = document.querySelector('.contact-us__title')
      const image = document.querySelector('.service__flower-img')
      const text = document.querySelector('.service__text')
      const socials = document.querySelector('.contact-us__socials-links')

      gsap.from(mainTitle, {
        opacity: 0,
        y: 100,
        rotate: 10,
        duration: 0.6,
        scrollTrigger: {
          trigger: mainTitle,
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

      gsap.from(text, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: text,
        },
      })

      ScrollTrigger.create({
        trigger: socials,
        animation: gsap.from(socials.querySelectorAll('a'), {
          opacity: 0,
          y: 20,
          stagger: 0.05,
        }),
      })
    },
    {
      scope: container,
    }
  )

  return (
    <div
      ref={container}
      className={`service__content ${
        modificator ? 'service__content--white' : ''
      }`}
    >
      <p className="text-overline service__subtitle">service</p>
      <h2 className="title-h2 service__title">
        {modificator ? 'Wedding & Event Decor' : 'Flower Subscriptions'}
      </h2>
      <p
        className={`text-subtitle service__text ${
          modificator ? 'service__text--white' : ''
        }`}
      >
        {modificator
          ? 'Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.'
          : 'Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.'}
      </p>
      <button
        className={`service__btn ${
          modificator ? 'btn-tertiary' : 'btn-secondary'
        }`}
      >
        {modificator ? 'Inquire Now' : 'Subscribe Now'}
      </button>
    </div>
  )
}
