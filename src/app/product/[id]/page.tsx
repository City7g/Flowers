import Quantity from '@/components/Quantity'
// import Image from 'next/image'

export default function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__image">
          {/* <Image
          src="/product.jpg"
          alt="Rosy Delight"
          layout="responsive"
          width={720}
          height={300}
          className="product__img"
          /> */}
          <img src="/product.jpg" alt="Rosy Delight" className="product__img" />
        </div>
        <div className="product__content">
          <h1 className="title-h2 product__title">Rosy Delight - $100</h1>

          <p className="text-body product__text">
            Large exceptional bouquet composed of a selection of David Austin
            roses, known for their beauty and subtle fragrance. The bouquet is
            accompanied by seasonal foliage which will enhance these sublime
            flowers even
          </p>

          <Quantity />

          <div className="product__options">
            <p className="text-subtitle product__options-title">
              Price options
            </p>

            <label className="label product__options-item">
              <input type="radio" name="options" checked />
              <p className="text-body">One time purchase. Price $100</p>
            </label>

            <label className="label product__options-item">
              <input type="radio" name="options" />
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
    </div>
  )
}
