'use client'

import { useModal } from '@/store/modal'
import IconBag from '../Icon/Bag'
import Burger from './Burger'

export default function Header() {
  const { modal, openModal } = useModal()

  return (
    <header className="header">
      <p className="header__link">Shop</p>
      <p className="header__link">Contact</p>
      <p onClick={() => openModal('reset')} className="header__link">
        Sing in
      </p>
      <p onClick={() => openModal('cart')} className="header__link">
        Cart
      </p>

      <div onClick={() => openModal('menu')} className="header__burger">
        <Burger />
      </div>

      <div onClick={() => openModal('cart')} className="bag">
        <IconBag />
      </div>
    </header>
  )
}
