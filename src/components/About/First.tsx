'use client'

import { gsap } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import Link from 'next/link'
import IconFacebook from '@/components/Icon/Socials/Facebook'
import IconInstagram from '@/components/Icon/Socials/Instagram'
import IconPinterest from '@/components/Icon/Socials/Pinterest'
import IconTelegram from '@/components/Icon/Socials/Telegram'
import IconTwitter from '@/components/Icon/Socials/Twitter'

export default function AboutFirst() {
  const container = useRef()

  useGSAP(
    () => {
      gsap.from('.about-first__title', {
        opacity: 0,
        y: 100,
        rotate: 20,
        duration: 0.6,
      })

      gsap.from('.about-first__text', {
        opacity: 0,
        y: 100,
        duration: 0.5,
      })

      gsap.from('.about-first__img', {
        opacity: 0,
        scale: 1.5,
        duration: 0.6,
      })

      gsap.from('.about-first__socials > *', {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        delay: 0.2,
      })
    },
    { scope: container }
  )

  return (
    <section ref={container} className="about-first">
      <div className="about-first__content">
        <div className="anim-wrap">
          <h1 className="title-h2 about-first__title">
            Our Story
            <br />
            About
            <br />
            Kyiv LuxeBouquets
          </h1>
        </div>

        <div className="anim-wrap">
          <p className="text-body about-first__text">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </p>
        </div>

        <div className="about-first__socials">
          <Link href="#" className="about-first__social">
            <IconInstagram />
          </Link>

          <Link href="#" className="about-first__social">
            <IconPinterest />
          </Link>

          <Link href="#" className="about-first__social">
            <IconFacebook />
          </Link>

          <Link href="#" className="about-first__social">
            <IconTwitter />
          </Link>

          <Link href="#" className="about-first__social">
            <IconTelegram />
          </Link>
        </div>
      </div>

      <div className="anim-wrap about-first__image">
        <img src="/about/first-bg.jpg" alt="" className="about-first__img" />
      </div>
    </section>
  )
}
