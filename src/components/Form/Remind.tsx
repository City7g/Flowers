'use client'

import { useState } from 'react'

export default function FormRemind() {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setText('')
  }

  return (
    <form onSubmit={onSubmitHandler} className="form" noValidate>
      <input
        type="email"
        value={text}
        onInput={(e) => setText(e.target.value)}
        className="form__input"
        placeholder="Your Email"
      />
      <button className="btn-primary form__button">Remind</button>
    </form>
  )
}
