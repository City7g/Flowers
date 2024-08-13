'use client'

import { useModal } from '@/store/modal'
import Close from '../Header/Close'

export default function DialogCart() {
  const { modal, closeModal } = useModal()

  const handleClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <div
      onClick={handleClick}
      className={`dialog ${modal === 'cart' ? 'show' : ''}`}
    >
      <div className="dialog__content">
        <div className="dialog__header">
          <p className="title-h6">Shopping Cart</p>

          <Close onClick={() => closeModal()} />
        </div>

        <div className="dialog__cards">
          <div className="dialog__card">
            <img src="/checkout.jpg" alt="" className="dialog__card-img" />

            <div className="dialog__card-info">
              <p className="text-subtitle">Rosy Delight</p>
              <p className="text-body">Quantity (1)</p>
              <p className="text-subtitle">$100</p>
            </div>

            <div className="dialog__card-remove">Remove</div>
          </div>
        </div>

        <div className="dialog__total">
          <p className="text-subtitle">Subtotal</p>
          <p className="title-h5">$100.00</p>
        </div>

        <div className="dialog__message">
          <textarea placeholder="Gift Message"></textarea>
        </div>

        <p className="text-caption dialog__banner">
          Shipping & taxes calculated at checkout Free standard shipping within
          Kyiv
        </p>

        <div className="btn-primary dialog__btn">Check out</div>
      </div>
    </div>
  )
}
