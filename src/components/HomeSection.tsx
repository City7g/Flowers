'use client'

import Image from 'next/image'
import GoodCard from './GoodCard'
import './../styles/base/_home-section.scss'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const cards = [
  {
    imgSrc: '/HomeSection/good-card-1.jpg',
    title: 'Fresh Flowers',
  },
  {
    imgSrc: '/HomeSection/good-card-2.jpg',
    title: 'Dried Flowers',
  },
  {
    imgSrc: '/HomeSection/good-card-3.jpg',
    title: 'Live Plants',
  },
  {
    imgSrc: '/HomeSection/good-card-4.jpg',
    title: 'Aroma Candels',
  },
  {
    imgSrc: '/HomeSection/good-card-5.jpg',
    title: 'Fresheners',
  },
]

export default function HomeSection() {
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    gsap.from('.home-section__title', {
      opacity: 0,
      y: 100,
      rotate: 20,
      delay: 0.2,
      duration: 0.6,
    })
  })

  return (
    <main>
      <div className="home-section">
        <div className="home-section__main">
          <div className="home-section__header">
            <h1 className="home-section__title title-h1">
              Kyiv <br /> LuxeBouquets
            </h1>
            <p className="home-sectoin__text text-subtitle">
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
              Spread Joy with Our Online Flower Delivery Service
            </p>
          </div>
          <div className="home-section__footer">
            <div className="home-section__image">
              <Image
                src="/HomeSection/img-hero.png"
                alt="img-hero"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <p className="text-caption home-section__footer-text">
              Experience the joy of giving with our modern floral studio. Order
              online and send fresh flowers, plants and gifts today.
            </p>
          </div>
        </div>
        <div className="home-section__goods">
          {cards.map((card, index) => (
            <GoodCard
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
