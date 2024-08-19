import Link from 'next/link'
import IcomoonIcon from './Icomoon'

export default function BaseLink({ href, text, className, isRight = true }) {
  return (
    <Link className={`link text-links ${className ?? ''}`} href={href}>
      {!isRight ? <IcomoonIcon icon="arrow-left" /> : null}
      <span>{text}</span>
      {isRight ? <IcomoonIcon icon="arrow-right" /> : null}
    </Link>
  )
}
