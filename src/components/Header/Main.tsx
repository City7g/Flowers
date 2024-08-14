'use client'

import { useModal } from '@/store/modal'
import IconBag from '../Icon/Bag'
import Burger from './Burger'

export default function Header() {
  const { modal, openModal, closeModal } = useModal()

  const toggleModal = () => {
    modal ? closeModal() : openModal('menu')
  }

  return (
    <header className="header">
      <p className="header__link">Shop</p>
      <p className="header__link">Contact</p>
      <p onClick={() => openModal('signin')} className="header__link">
        Sing in
      </p>
      <p onClick={() => openModal('cart')} className="header__link">
        Cart
      </p>

      <div onClick={toggleModal} className="header__burger">
        <Burger />
      </div>

      <button onClick={() => openModal('cart')} className="bag">
        <IconBag />
      </button>
    </header>
  )
}
