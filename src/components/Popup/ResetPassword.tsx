'use client'

import { useModal } from '@/store/modal'
import FormResetPassword from '../Form/ResetPassword'

export default function PopupResetPassword() {
  const { modal, closeModal } = useModal()

  const handleClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <div
      onClick={handleClick}
      className={`popup ${modal === 'reset' ? 'show' : ''}`}
    >
      <div className="popup__content">
        <h1 className="title-h2 popup__title">Reset your password</h1>
        <p className="title-h6 popup__text">
          Please provide your phone number below to receive a code for restoring
          access to your account
        </p>

        <FormResetPassword />

        <p className="popup__or">
          <span className="text-caption">or</span>
        </p>

        <div className="popup__links">
          <p className="text-link">Privacy Policy</p>
          <span className="text-link">|</span>
          <p className="text-link">Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}
