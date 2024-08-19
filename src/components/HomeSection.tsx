'use client'

import Image from 'next/image'
import GoodCard from './GoodCard'
import './../styles/base/_home-section.scss'

import { gsap } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import leftImage from '../../public/HomeSection/img-hero.png'
import image1 from '../../public/HomeSection/good-card-1.jpg'
import image2 from '../../public/HomeSection/good-card-2.jpg'
import image3 from '../../public/HomeSection/good-card-3.jpg'
import image4 from '../../public/HomeSection/good-card-4.jpg'
import image5 from '../../public/HomeSection/good-card-5.jpg'

const cards = [
  {
    title: 'Fresh Flowers',
    image: image1,
  },
  {
    title: 'Dried Flowers',
    image: image2,
  },
  {
    title: 'Live Plants',
    image: image3,
  },
  {
    title: 'Aroma Candels',
    image: image4,
  },
  {
    title: 'Fresheners',
    image: image5,
  },
]

export default function HomeSection() {
  const container = useRef()

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.from('.home-section__title', {
        opacity: 0,
        y: 100,
        rotate: 20,
        duration: 0.6,
      })
        .from(
          '.home-sectoin__text',
          {
            opacity: 0,
            y: 100,
            duration: 0.5,
          },
          0.1
        )
        .from(
          '.home-section__image img',
          {
            opacity: 0,
            scale: 0,
            duration: 0.6,
          },
          0.2
        )
        .from(
          '.home-section__footer-text',
          {
            opacity: 0,
            y: 100,
            duration: 0.5,
          },
          0.3
        )
    },
    { scope: container }
  )

  return (
    <div ref={container} className="home-section">
      <div className="home-section__main">
        <div className="home-section__header">
          <h1 className="title-h1 home-section__title">
            Kyiv <br /> LuxeBouquets
          </h1>
          <p className="text-subtitle home-sectoin__text">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </p>
        </div>
        <div className="home-section__footer">
          <div className="home-section__image">
            <Image src={leftImage} alt="img-hero" style={{ height: 'auto' }} />
          </div>
          <div className="home-section__footer-text-wrap">
            <p className="text-caption home-section__footer-text">
              Experience the joy of giving with our modern floral studio. Order
              online and send fresh flowers, plants and gifts today.
            </p>
          </div>
        </div>
      </div>
      <div className="home-section__goods">
        {cards.map((card, index) => (
          <GoodCard
            key={index}
            image={card.image}
            title={card.title}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  )
}
