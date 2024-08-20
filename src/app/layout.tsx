'use client'

import '../styles/main.scss'
import Header from '@/components/Header/Main'
import PopupMenu from '@/components/Popup/Menu'
import Footer from '@/components/Footer'
import PopupResetPassword from '@/components/Popup/ResetPassword'
import PopupCart from '@/components/Popup/Cart'
import PopupSignIn from '@/components/Popup/SignIn'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { gilroy } from './fonts'
import { useLayoutEffect } from 'react'

// if (typeof window !== 'undefined') {
// }

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
  }, [])

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
