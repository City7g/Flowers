import Quantity from '@/components/Quantity'
import Image from 'next/image'
import image from '../../../../public/product.jpg'
import image1 from '../../../../public/product/item-1.jpg'
import image2 from '../../../../public/product/item-2.jpg'
import image3 from '../../../../public/product/item-3.jpg'
import image4 from '../../../../public/product/item-4.jpg'
import ProductCategory from '@/components/ProductCategory'

const also = [
  { id: 0, title: 'Rattan Grapefruit', price: 48, img: image1 },
  { id: 1, title: 'Lime & Matcha', price: 46, img: image2 },
  { id: 2, title: 'Cedar & Lavender', price: 64, img: image3 },
  { id: 3, title: 'Ocean Mist', price: 58, img: image4 },
]

export default function ProductPage() {
  return (
    <div>
      <div className="product">
        <div className="product__image">
          <Image src={image} alt="Rosy Delight" className="product__img" />
        </div>
        <div className="product__content">
          <ProductCategory className="product__category" />

          <h1 className="title-h2 product__title">Rosy Delight - $100</h1>

          <p className="text-body product__text">
            Large exceptional bouquet composed of a selection of David Austin
            roses, known for their beauty and subtle fragrance. The bouquet is
            accompanied by seasonal foliage which will enhance these sublime
            flowers even
          </p>

          <div className="product__quantity">
            <h3 className="text-subtitle">Quantity</h3>
            <Quantity />
          </div>

          <div className="product__options">
            <p className="text-subtitle product__options-title">
              Price options
            </p>

            <label className="label product__options-item">
              <input type="radio" name="options" value="one" checked />
              <p className="text-body">One time purchase. Price $100</p>
            </label>

            <label className="label product__options-item">
              <input type="radio" name="options" value="two" />
              <p className="text-body">
                Subscribe now, and save 25% on this order.{' '}
              </p>
            </label>
          </div>

          <button className="btn-primary product__button">Add to basket</button>
        </div>
      </div>

      <div className="text-section">
        <h2 className="title-h3">You may also like…</h2>
      </div>

      <div className="alsos">
        {also.map((item) => (
          <div key={item.id} className="also">
            <h3 className="title-h6 also__title">{item.title}</h3>
            <p className="text-caption also__price">price {item.price}$</p>
            <Image src={item.img} alt="" className="also__img" />
          </div>
        ))}
      </div>
    </div>
  )
}
