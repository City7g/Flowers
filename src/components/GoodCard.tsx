import ShopNow from '@/app/ui/buttons/shop-now'
import Image from 'next/image'
import './../styles/base/_good-card.scss'

export default function GoodCard({ imgSrc, title, reverse }) {
  return (
    <div className={`good-card ${reverse ? 'good-card--reverse' : ''}`}>
      <div className="good-card__content">
        <h3 className="title-h3 good-card__title">{title}</h3>
        <ShopNow reverse={reverse} />
      </div>

      <div className="good-card__image">
        <Image
          src={imgSrc}
          alt="good-card"
          layout="responsive"
          width={500}
          height={300}
        />
      </div>
    </div>
  )
}
