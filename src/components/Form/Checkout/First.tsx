'use client'

import { useState } from 'react'

export default function FormCheckoutFirst() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setText('')
    setEmail('')
    setPhone('')
  }

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <p className="form__title">1 Contact information</p>

      <input
        type="text"
        value={text}
        onInput={(e) => setText(e.target.value)}
        className="form__input"
        placeholder="Your Name"
      />

      <input
        type="email"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
        className="form__input"
        placeholder="Your Email"
      />

      <input
        type="tel"
        value={phone}
        onInput={(e) => setPhone(e.target.value)}
        className="form__input"
        placeholder="Your Phone number *"
      />

      <button className="btn-primary form__button">Remind</button>
    </form>
  )
}
