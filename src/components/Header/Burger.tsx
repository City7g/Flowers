'use client'
import { useState } from 'react'

export default function Burger() {
  const [isActive, setIsActive] = useState(false)

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`burger${isActive ? ' active' : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
