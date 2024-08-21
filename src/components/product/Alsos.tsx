import Image from 'next/image'
import image1 from '@/assets/product/item-1.jpg'
import image2 from '@/assets/public/product/item-2.jpg'
import image3 from '@/assets/public/product/item-3.jpg'
import image4 from '@/assets/public/product/item-4.jpg'

const also = [
  { id: 0, title: 'Rattan Grapefruit', price: 48, img: image1 },
  { id: 1, title: 'Lime & Matcha', price: 46, img: image2 },
  { id: 2, title: 'Cedar & Lavender', price: 64, img: image3 },
  { id: 3, title: 'Ocean Mist', price: 58, img: image4 },
]

export default function Alsos() {
  return (
    <div className="alsos">
      {also.map((item) => (
        <div key={item.id} className="also">
          <h3 className="title-h6 also__title">{item.title}</h3>
          <p className="text-caption also__price">price {item.price}$</p>
          <Image src={item.img} alt="" className="also__img" />
        </div>
      ))}
    </div>
  )
}
