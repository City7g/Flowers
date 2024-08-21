'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Popup from '@/components/popup/Index'
import Close from '@/components/header/Close'
import Socials from '@/components/Socials'
import { useModal } from '@/store/modal'

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

      <button
        onClick={() => openModal('signin')}
        className="title-h5 menu__link"
      >
        Sign in
      </button>
      <Link href="/" className="title-h5 menu__link">
        Home
      </Link>
      <Link href="/shop" className="title-h5 menu__link">
        Shop
      </Link>
      <Link href="/about" className="title-h5 menu__link">
        About us
      </Link>
      <Link href="/subscription" className="title-h5 menu__link">
        Subscription
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
