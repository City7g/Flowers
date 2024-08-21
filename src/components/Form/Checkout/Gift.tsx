'use client'

import React, { useState } from 'react'

export default function FormCheckoutGift() {
  const [text, setText] = useState('')

  const onSubmitHandler = (e: React.FormEvent) => {
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
        onInput={(e) => setText((e.target as HTMLInputElement).value)}
        className="form__input"
        placeholder="Gift card"
      />
      <button className="btn-primary form__button">Apply</button>
    </form>
  )
}
