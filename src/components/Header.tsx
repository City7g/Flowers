import Link from 'next/link'
import ButtonPrimary from './ButtonPrimary'

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <ButtonPrimary text={'Pimary'}></ButtonPrimary>
    </header>
  )
}
