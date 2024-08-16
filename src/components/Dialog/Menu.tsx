'use client'

import Link from 'next/link'
import { useModal } from '@/store/modal'
import IconInstagram from '../Icon/Socials/Instagram'
import IconPinterest from '../Icon/Socials/Pinterest'
import IconFacebook from '../Icon/Socials/Facebook'
import IconTwitter from '../Icon/Socials/Twitter'
import IconTelegram from '../Icon/Socials/Telegram'
import Close from '../Header/Close'

export default function DialogMenu() {
  const { modal, openModal, closeModal } = useModal()

  const handleClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <div
      onClick={handleClick}
      className={`dialog dialog--left ${modal === 'menu' ? 'show' : ''}`}
    >
      <div className="dialog__content">
        <div className="dialog__header">
          <Close onClick={closeModal} />
        </div>

        <p
          onClick={() => openModal('signin')}
          className="title-h5 dialog__link"
        >
          Sign in
        </p>
        <Link href="/" className="title-h5 dialog__link">
          Home
        </Link>
        <Link href="/category" className="title-h5 dialog__link">
          Shop
        </Link>
        <Link href="/about" className="title-h5 dialog__link">
          About us
        </Link>

        <div className="dialog__list">
          <p className="text-link dialog__item">Shipping & returns</p>
          <p className="text-link dialog__item">Terms & conditions</p>
          <p className="text-link dialog__item">Terms & conditions</p>
        </div>

        <div className="dialog__socials">
          <Link href="#">
            <IconInstagram />
          </Link>

          <Link href="#">
            <IconPinterest />
          </Link>

          <Link href="#">
            <IconFacebook />
          </Link>

          <Link href="#">
            <IconTwitter />
          </Link>

          <Link href="#">
            <IconTelegram />
          </Link>
        </div>
      </div>
    </div>
  )
}
