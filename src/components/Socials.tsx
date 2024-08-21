import Link from 'next/link'
import IcomoonIcon from '@/components/Icomoon'

const socials = ['instagram', 'pinterest', 'facebook', 'twitter', 'telegram']

export default function Socials({ className = '', round = false }) {
  return (
    <div
      className={`socials ${className ?? ''}${round ? ' socials--round' : ''}`}
    >
      {socials.map((social) => (
        <Link className="socials__link" key={social} href="#">
          <IcomoonIcon icon={social} />
        </Link>
      ))}
    </div>
  )
}
