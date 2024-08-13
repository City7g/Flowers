'use client'

import { useModal } from '@/store/modal'
import FormResetPassword from '../Form/ResetPassword'
import IconGoogle from '../Icon/Google'
import IconApple from '../Icon/Apple'

export default function PopupSignIn() {
  const { modal, closeModal } = useModal()

  const handleClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <div
      onClick={handleClick}
      className={`popup ${modal === 'signin' ? 'show' : ''}`}
    >
      <div className="popup__content">
        <h1 className="title-h2 popup__title">
          Greetings! Welcome to luxury gift shop.
        </h1>
        <p className="title-h6 popup__text">
          Use your mobile number to sign up or log in
        </p>

        <FormResetPassword />

        <p className="popup__or">
          <span className="text-caption">or</span>
        </p>

        <div className="popup__login">
          <p className="title-h6 popup__login-text">
            Instantly login or sign up via Google
          </p>

          <div className="popup__login-btns">
            <div className="btn-secondary">
              <IconGoogle />
              continue with google
            </div>

            <div className="btn-secondary">
              <IconApple />
              continue with apple
            </div>
          </div>
        </div>

        <div className="popup__links">
          <p className="text-link">Privacy Policy</p>
          <span className="text-link">|</span>
          <p className="text-link">Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}
