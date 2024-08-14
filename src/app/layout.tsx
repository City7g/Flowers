import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/main.scss'
import Header from '@/components/Header/Main'
import DialogMenu from '@/components/Dialog/Menu'
import Footer from '@/components/Footer'
import PopupResetPassword from '@/components/Popup/ResetPassword'
import DialogCart from '@/components/Dialog/Cart'
import PopupSignIn from '@/components/Popup/SignIn'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  console.log('layout')

  gsap.registerPlugin(ScrollTrigger, useGSAP)
} else {
  console.log('layout 1')
}

const gilroy = localFont({
  src: [
    {
      path: '../fonts/Gilroy/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Gilroy/Gilroy-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Gilroy/Gilroy-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Flowers',
  description: 'Flowers site',
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
