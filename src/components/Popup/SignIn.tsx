'use client'

import { useModal } from '@/store/modal'
import Popup from '@/components/popup/Index'
import FormResetPassword from '@/components/form/ResetPassword'
import IconGoogle from '@/components/icon/Google'
import IcomoonIcon from '@/components/Icomoon'

export default function PopupSignIn() {
  const { modal, closeModal } = useModal()

  const handleClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <Popup
      isShow={modal === 'signin'}
      clickOutside={handleClick}
      className="popup-form"
    >
      <h1 className="title-h2 popup-form__title">
        Greetings! Welcome to luxury gift shop.
      </h1>
      <p className="title-h6 popup-form__text">
        Use your mobile number to sign up or log in
      </p>

      <FormResetPassword />

      <p className="popup-form__or">
        <span className="text-caption">or</span>
      </p>

      <div className="popup-form__login">
        <p className="title-h6 popup-form__login-text">
          Instantly login or sign up via Google
        </p>

        <div className="popup-form__login-btns">
          <div className="btn-secondary">
            <IconGoogle />
            continue with google
          </div>

          <div className="btn-secondary">
            <IcomoonIcon icon="apple" />
            continue with apple
          </div>
        </div>
      </div>

      <div className="popup-form__links">
        <p className="text-link">Privacy Policy</p>
        <span className="text-link">|</span>
        <p className="text-link">Terms and Conditions</p>
      </div>
    </Popup>
  )
}
