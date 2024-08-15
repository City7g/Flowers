'use client'

import { useModal } from '@/store/modal'
import IconBag from '../Icon/Bag'
import Burger from './Burger'
import Link from 'next/link'

export default function Header() {
  const { modal, openModal, closeModal } = useModal()

  const toggleModal = () => {
    modal ? closeModal() : openModal('menu')
  }

  return (
    <header className="header">
      <div className=" header__link">
        <Link href="/shop" className="btn-anim">
          <span>Shop</span>
        </Link>
      </div>

      <p className="header__link">Contact</p>

      <div className="header__link">
        <button onClick={() => openModal('signin')} className="btn-anim">
          <span>Sing in</span>
        </button>
      </div>

      <p className="header__link">
        <button onClick={() => openModal('cart')} className="btn-anim">
          <span>Cart</span>
        </button>
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
