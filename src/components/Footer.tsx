import FormRemind from './Form/Remind'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__form">
        <p className="text-body footer__form-text">
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
          sharing your address
        </p>

        <FormRemind />
      </div>

      <div className="footer__column">
        <h3 className="title-h5">Contact Us</h3>
      </div>

      <div className="footer__column">
        <h3 className="title-h5">Shop</h3>
        <ul>
          <li>All Products</li>
          <li>Fresh Flowers</li>
          <li>Dried Flowers</li>
          <li>Live Plants</li>
          <li>Designer Vases</li>
          <li>Aroma Candles</li>
          <li>Freshener Diffuser</li>
        </ul>
      </div>
    </footer>
  )
}
