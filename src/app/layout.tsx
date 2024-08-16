'use client'

import '../styles/main.scss'
import Header from '@/components/Header/Main'
import DialogMenu from '@/components/Dialog/Menu'
import Footer from '@/components/Footer'
import PopupResetPassword from '@/components/Popup/ResetPassword'
import DialogCart from '@/components/Dialog/Cart'
import PopupSignIn from '@/components/Popup/SignIn'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { gilroy } from './fonts'

if (typeof window !== 'undefined') {
  console.log('layout')

  gsap.registerPlugin(ScrollTrigger, useGSAP)
} else {
  console.log('layout 1')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={gilroy.className}>
      <body>
        <Header />

        {children}

        <Footer />

        <DialogMenu />
        <DialogCart />

        <PopupResetPassword />
        <PopupSignIn />
      </body>
    </html>
  )
}
