'use client'

import { useModal } from '@/store/modal'

export default function Burger({ close = false }) {
  const { modal, openModal } = useModal()

  return (
    <button
      onClick={() => openModal('menu')}
      className={`burger${modal ? ' active' : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
