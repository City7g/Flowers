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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
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

        <PopupMenu />
        <PopupCart />

        <PopupResetPassword />
        <PopupSignIn />
      </body>
    </html>
  )
}
