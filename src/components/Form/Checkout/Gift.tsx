'use client'

import { useState } from 'react'

export default function FormCheckoutGift() {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setText('')
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="form form--horizontal"
      noValidate
    >
      <input
        type="email"
        value={text}
        onInput={(e) => setText(e.target.value)}
        className="form__input"
        placeholder="Gift card"
      />
      <button className="btn-primary form__button">Apply</button>
    </form>
  )
}
