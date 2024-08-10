'use client'
import { useState } from 'react'

export default function Burger() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`burger ${isActive ? 'active' : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
