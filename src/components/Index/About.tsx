'use client'

import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function IndexAbout() {
  const container = useRef()

  useGSAP(() => {
    const mainTitle = document.querySelector('.s-base__title')
    const title = document.querySelector('.s-base__heading')
    const subtitle = document.querySelector('.s-base__subtitle')
    const text = document.querySelector('.s-base__text')

    gsap.from(mainTitle, {
      opacity: 0,
      y: 100,
      rotate: 10,
      duration: 0.6,
      scrollTrigger: {
        trigger: mainTitle,
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

    gsap.from(subtitle, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: subtitle,
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
  })

  return (
    <section ref={container} className="s-base">
      <div className="s-base__left">
        <h2 className="title-h2 s-base__title">About us</h2>
      </div>
      <div className="s-base__right">
        <div className="s-base__subtitle-wrap">
          <h4 className="text-overline s-base__subtitle">Our story</h4>
        </div>

        <h3 className="title-h3 s-base__heading">Kyiv LuxeBouquets</h3>

        <div className="s-base__text-wrap">
          <p className="text-body s-base__text">
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone&apos;s day
            amazing by sending flowers, plants and gifts the same or next day.
            Ordering flowers online has never been easier.
          </p>
        </div>

        <button className="btn-secondary s-base__button">
          <span>Lern more</span>
        </button>
      </div>
    </section>
  )
}
