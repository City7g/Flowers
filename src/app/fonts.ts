import localFont from 'next/font/local'

export const icomoon = localFont({
  src: [
    {
      path: '../fonts/icomoon/icomoon.woff2',
    },
  ],
})

export const gilroy = localFont({
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
    {
      path: '../fonts/Gilroy/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
