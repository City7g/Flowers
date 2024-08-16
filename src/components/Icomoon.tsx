import { icomoon } from '@/app/fonts'

export default function IcomoonIcon({ icon }) {
  return <i className={`icon-${icon} ${icomoon.className}`}></i>
}
