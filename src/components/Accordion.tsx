'use client'

import { useState } from 'react'
import IconArrow from './Icon/Arraw'

export default function Accordion({ className = '', content }) {
  const [active, setActive] = useState(0)

  const changeActive = (index) => {
    active === index ? setActive(null) : setActive(index)
  }

  return (
    <div className={`accordion ${className ?? ''}`}>
      {content.map((item, index) => (
        <div
          key={item}
          className={`accordion__item ${active === index ? 'active' : ''}`}
        >
          <div className="accordion__header">
            <h4 className="title-h4 accordion__title">{item}</h4>

            <div
              onClick={() => changeActive(index)}
              className="accordion__arrow"
            >
              <IconArrow />
            </div>
          </div>

          <div className="accordion__content">
            <p className="text-body accordion__text">
              Our subscriptions allow you to select a delivery frequency that
              best suits your needs - either weekly, bi-weekly, or monthly. You
              can also choose the number of deliveries for your subscription.
              Choose any combination that works for you!
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
