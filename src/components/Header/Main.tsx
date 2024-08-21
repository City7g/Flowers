'use client'

import Link from 'next/link'
import { useModal } from '@/store/modal'
import { usePathname } from 'next/navigation'
import Burger from '@/components/header/Burger'
import IcomoonIcon from '@/components/Icomoon'

export default function Header() {
  const { modal, openModal, closeModal } = useModal()

  const toggleModal = () => {
    modal === 'menu' ? closeModal() : openModal('menu')
  }

  return (
    <header className="header">
      <div className="header__left">
        <div className=" header__link">
          {usePathname() === '/shop' ? (
            <Link href="/" className="btn-anim">
              <span>Home</span>
            </Link>
          ) : (
            <Link href="/shop" className="btn-anim">
              <span>Shop</span>
            </Link>
          )}
        </div>

        <p className="header__link">
          <Link href="/about" className="btn-anim">
            <span>About</span>
          </Link>
        </p>
      </div>

      <div className="header__right">
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
      </div>

      <div onClick={toggleModal} className="header__burger">
        <Burger />
      </div>

      <button onClick={() => openModal('cart')} className="header__bag">
        <IcomoonIcon icon={'local-mall'} />
      </button>
    </header>
  )
}
