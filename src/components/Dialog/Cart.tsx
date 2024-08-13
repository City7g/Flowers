'use client'

import { useModal } from '@/store/modal'
import Burger from '../Header/Burger'

export default function DialogCart() {
  const { modal, closeModal } = useModal()

  const handleClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <div
      onClick={handleClick}
      className={`dialog ${modal === 'card' ? 'show' : ''}`}
    >
      <div className="dialog__content">
        <div className="dialog__top">
          <Burger close={true} />
        </div>
        asd
        <p className="title-h5 dialog__link">Sign in</p>
        <p className="title-h5 dialog__link">Shop</p>
        <p className="title-h5 dialog__link">Servise</p>
        <p className="title-h5 dialog__link">Contact</p>
        <p className="title-h5 dialog__link">About us</p>
        <div className="dialog__list">
          <p className="text-link dialog__item">Shipping & returns</p>
          <p className="text-link dialog__item">Terms & conditions</p>
          <p className="text-link dialog__item">Terms & conditions</p>
        </div>
      </div>
    </div>
  )
}
