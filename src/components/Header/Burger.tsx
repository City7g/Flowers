'use client'
import { useState } from 'react'

export default function Burger({ close = false }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`burger${isActive ? ' active' : ''}${
        close ? ' burger--close' : ''
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
