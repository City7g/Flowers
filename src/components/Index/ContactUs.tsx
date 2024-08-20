'use client'

import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import ContactForm from '../Form/ContactForm'
import Socials from '../Socials'
import image from '../../../public/contact.png'
import Image from 'next/image'
import IcomoonIcon from '../Icomoon'

export default function ContactUs() {
  const container = useRef()

  useGSAP(
    () => {
      const mainTitle = container.current.querySelector('.contact-us__title')
      const image = container.current.querySelector('.contact-us__img')
      const text = container.current.querySelector('.contact-us__form-subtext')
      const socials = container.current.querySelector(
        '.contact-us__socials-links'
      )

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
        animation: gsap.fromTo(
          socials.querySelectorAll('a'),
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
          }
        ),
      })
    },
    {
      scope: container,
    }
  )

  return (
    <div ref={container} className="contact-us">
      <div className="contact-us__left">
        <div className="contact-us__form">
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
                <IcomoonIcon icon={'phone'} />
                +380980099777
              </a>
              <a href="tel:+380980099111" className="text-link phone-link">
                <IcomoonIcon icon={'phone'} />
                +380980099111
              </a>
            </div>
          </div>
          <div className="contact-us__links-right">
            <h3 className="title-h3 contact-us__subtitle">Address</h3>
            <div className="address-link">
              <p>opening hours: 8 to 11 p.m.</p>
              <a href="#" className="text-link location">
                <IcomoonIcon icon={'pin'} />
                15/4 Khreshchatyk Street, Kyiv
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us__right">
        <div className="contact-us__image">
          <Image src={image} alt="" className="contact-us__img" />
        </div>

        <div className="contact-us__socials">
          <h3 className="title-h3 contact-us__socials-title">Follow us:</h3>

          <Socials className="contact-us__socials-links" />
        </div>
      </div>
    </div>
  )
}
