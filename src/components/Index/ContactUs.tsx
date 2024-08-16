'use client'

import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../Form/ContactForm'

export default function ContactUs() {
  const container = useRef()

  useGSAP(
    () => {
      const mainTitle = document.querySelector('.contact-us__title')
      const image = document.querySelector('.contact-us__img')
      const text = document.querySelector('.contact-us__form-subtext')
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
    <div ref={container} className="contact-us">
      <div className="contact-us__image-block">
        <div className="contact-us__image">
          <img
            className="contact-us__img"
            src="/contact.png"
            alt="contact-img"
          />
        </div>

        <div className="contact-us__socials">
          <h3 className="title-h3 contact-us__socials-title">Follow us:</h3>

          <div className="contact-us__socials-links">
            <Link href="#">
              <Image
                src="/icons/Instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/Pinterest.svg"
                alt="Pinterest"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/Facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/Twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/Telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-us__form-block">
        <h2 className="title-h2 contact-us__title">To Contact Us</h2>

        <div className="contact-us__form-subtext-wrap">
          <p className="text-subtitle contact-us__form-subtext">
            We will call you back
          </p>
        </div>

        <ContactForm />
      </div>
      <div className="contact-us__links-block">
        <div className="contact-us__links-left">
          <h3 className="title-h3 contact-us__subtitle">Phone</h3>
          <div className="phone-links">
            <a href="tel:+380980099777" className="text-link phone-link">
              +380980099777
            </a>
            <a href="tel:+380980099111" className="text-link phone-link">
              +380980099111
            </a>
          </div>
        </div>
        <div className="contact-us__links-rigth">
          <h3 className="title-h3 contact-us__subtitle">Address</h3>
          <div className="address-link">
            <p>opening hours: 8 to 11 p.m.</p>
            <a href="#" className="text-link location">
              15/4 Khreshchatyk Street, Kyiv
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
