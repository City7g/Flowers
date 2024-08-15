'use client'

import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const content = [
  {
    title: 'Stylish bouquets by florists',
    text: 'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.',
  },
  {
    title: 'On-time delivery',
    text: 'Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.',
  },
  {
    title: 'Safe payment',
    text: 'You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.',
  },
  {
    title: 'Subscription by your needs',
    text: "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.",
  },
]

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function Why() {
  const container = useRef()

  useGSAP(() => {
    const mainTitle = document.querySelector('.why-section__title')
    const titles = gsap.utils.toArray('.why-section__block-title')
    const texts = gsap.utils.toArray('.why-section__block-text')

    gsap.from(mainTitle, {
      opacity: 0,
      y: 100,
      rotate: 10,
      duration: 0.6,
      scrollTrigger: {
        trigger: mainTitle,
      },
    })

    titles.forEach((title) => {
      gsap.from(title, {
        opacity: 0,
        y: 100,
        rotate: 10,
        duration: 0.6,
        scrollTrigger: {
          trigger: title,
        },
      })
    })

    texts.forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: text,
        },
      })
    })
  })

  return (
    <div ref={container} className="why-section">
      <div className="why-section__title-wrap">
        <h2 className="title-h2 why-section__title">Why choose us?</h2>
      </div>

      <div className="why-section__blocks">
        {content.map((item) => (
          <div key={item.title} className="why-section__block">
            <div className="why-section__block-title-wrap">
              <h3 className="title-h3 why-section__block-title">
                {item.title}
              </h3>
            </div>

            <div className="why-section__block-text-wrap">
              <p className="text-body why-section__block-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
