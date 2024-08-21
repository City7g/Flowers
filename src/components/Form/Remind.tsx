'use client'

import React, { useState } from 'react'

export default function FormRemind() {
  const [text, setText] = useState('')

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setText('')
  }

  return (
    <form onSubmit={onSubmitHandler} className="form" noValidate>
      <input
        type="email"
        value={text}
        onInput={(e) => setText((e.target as HTMLInputElement).value)}
        className="form__input"
        placeholder="Your Email"
      />
      <button className="btn-primary form__button">Remind</button>
    </form>
  )
}
