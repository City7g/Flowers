'use client'

import Link from 'next/link'
import { useModal } from '@/store/modal'
import Close from '../Header/Close'
import Socials from '../Socials'
import Popup from './Index'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PopupMenu() {
  const { modal, openModal, closeModal } = useModal()
  const pathname = usePathname()

  const handleClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  useEffect(() => {
    closeModal()
  }, [pathname])

  return (
    <Popup
      isShow={modal === 'menu'}
      clickOutside={handleClick}
      side="left"
      className="menu"
    >
      <div className="menu__header">
        <Close onClick={closeModal} />
      </div>

      <p onClick={() => openModal('signin')} className="title-h5 menu__link">
        Sign in
      </p>
      <Link href="/" className="title-h5 menu__link">
        Home
      </Link>
      <Link href="/category" className="title-h5 menu__link">
        Shop
      </Link>
      <Link href="/about" className="title-h5 menu__link">
        About us
      </Link>

      <div className="menu__list">
        <p className="text-link menu__item">Shipping & returns</p>
        <p className="text-link menu__item">Terms & conditions</p>
        <p className="text-link menu__item">Terms & conditions</p>
      </div>

      <Socials className="menu__socials" />
    </Popup>
  )
}
