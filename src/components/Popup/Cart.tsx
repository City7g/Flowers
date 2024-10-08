'use client'

import Image from 'next/image'
import Close from '@/components/header/Close'
import Popup from '@/components/popup/Index'
import { useModal } from '@/store/modal'
import checkoutImage from '@/assets/checkout.jpg'

export default function PopupCart() {
  const { modal, closeModal } = useModal()

  const handleClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <Popup
      isShow={modal === 'cart'}
      clickOutside={handleClick}
      side="right"
      className="cart"
    >
      <div className="cart__header">
        <p className="title-h6">Shopping Cart</p>

        <Close onClick={() => closeModal()} />
      </div>

      <div className="cart__cards">
        <div className="cart__card">
          <Image src={checkoutImage} alt="" className="cart__card-img" />

          <div className="cart__card-info">
            <p className="text-subtitle">Rosy Delight</p>
            <p className="text-body">Quantity (1)</p>
            <p className="text-subtitle">$100</p>
          </div>

          <div className="cart__card-remove">Remove</div>
        </div>
      </div>

      <div className="cart__total">
        <p className="text-subtitle">Subtotal</p>
        <p className="title-h5">$100.00</p>
      </div>

      <div className="cart__message">
        <textarea placeholder="Gift Message"></textarea>
      </div>

      <p className="text-caption cart__banner">
        Shipping & taxes calculated at checkout Free standard shipping within
        Kyiv
      </p>

      <div className="btn-primary cart__btn">Check out</div>
    </Popup>
  )
}
