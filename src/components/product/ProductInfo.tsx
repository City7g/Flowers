import Image from 'next/image'
import Quantity from '../Quantity'
import ProductCategory from '../ProductCategory'
import image from '@/assets/product.jpg'

export default function ProductInfo() {
  return (
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
          <p className="text-subtitle product__options-title">Price options</p>

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
  )
}
