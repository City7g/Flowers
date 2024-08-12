'use client'

import { useState } from 'react'

export default function Quantity() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="quantity">
      <button
        onClick={() => setQuantity(quantity - 1)}
        className="quantity__button"
      >
        <span></span>
      </button>

      <span className="text-body quantity__value">{quantity}</span>

      <button
        onClick={() => setQuantity(quantity + 1)}
        className="quantity__button"
      >
        <span></span>
        <span></span>
      </button>
    </div>
  )
}
