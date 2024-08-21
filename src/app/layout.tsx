'use client'

import Header from '@/components/header/Main'
import PopupMenu from '@/components/popup/Menu'
import Footer from '@/components/Footer'
import PopupResetPassword from '@/components/popup/ResetPassword'
import PopupCart from '@/components/popup/Cart'
import PopupSignIn from '@/components/popup/SignIn'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { gilroy } from './fonts'
import '@/styles/main.scss'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={gilroy.className}>
      <head>
        <title>Flowers</title>
      </head>

      <body>
        <Header />

        {children}

        <Footer />

        <PopupMenu />
        <PopupCart />

        <PopupResetPassword />
        <PopupSignIn />
      </body>
    </html>
  )
}
