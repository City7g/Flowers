import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/main.scss'
import Header from '@/components/Header/Main'
import PopupResetPassword from '@/components/Popup/ResetPassword'
import Footer from '@/components/Footer'

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

        {/* <PopupResetPassword /> */}
      </body>
    </html>
  )
}
