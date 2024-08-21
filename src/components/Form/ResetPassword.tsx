'use client'

import { useState } from 'react'

export default function FormResetPassword() {
  const [text, setText] = useState('')

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setText('')
  }

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <p className="title-h6 form__title">Enter your mobile number</p>
      <input
        type="text"
        value={text}
        onInput={(e) => setText((e.target as HTMLInputElement).value)}
        className="form__input"
        placeholder="+380 XX XXX XX XX"
      />
      <button className="btn-primary form__button">continue</button>
    </form>
  )
}
