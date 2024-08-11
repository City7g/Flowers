'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [text, setText] = useState('')

  const onSubmitHandler = e => {
    e.preventDefault()
    setText('')
  }

  return (
    <form onSubmit={onSubmitHandler} className="form form--horisontal" noValidate>
      <input
        type="email"
        value={text}
        onInput={e => setText(e.target.value)}
        className="form__input"
        placeholder="+380 XX XXX XX XX"
      />
      <button className="btn-primary form__button">Book a Call</button>
    </form>
  )
}
