import './../../../styles/base/_shop-now-btn.scss'

export default function ShopNow({ reverse }) {
  return (
    <button
      className={`shop-now-btn ${reverse ? 'shop-now-btn--reverse' : ''}`}
    >
      Shop now
    </button>
  )
}
