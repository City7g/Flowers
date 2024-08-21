import FormRemind from '@/components/form/Remind'
import Socials from '@/components/Socials'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__form">
          <p className="text-body footer__form-text">
            Remember to offer beautiful flowers from Kyiv LuxeBouquets
            Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
            No spam or sharing your address
          </p>

          <FormRemind />
        </div>

        <div className="footer__column">
          <h3 className="title-h5 footer__title">Contact Us</h3>

          <h4 className="text-caption footer__subtitle">Address</h4>
          <p className="footer__link">15/4 Khreshchatyk Street, Kyiv</p>

          <h4 className="text-caption footer__subtitle">Phone</h4>
          <p className="footer__link">+380980099777</p>

          <h4 className="text-caption footer__subtitle">General Enquiry:</h4>
          <p className="footer__link">Kiev.Florist.Studio@gmail.com</p>

          <h3 className="title-h5 footer__title">Follow Us</h3>

          <Socials className="footer__socials" />
        </div>
      </div>

      <div className="footer__content">
        <div className="footer__column">
          <h3 className="title-h5 footer__title">Shop</h3>
          <ul className="footer__list">
            <li>All Products</li>
            <li>Fresh Flowers</li>
            <li>Dried Flowers</li>
            <li>Live Plants</li>
            <li>Designer Vases</li>
            <li>Aroma Candles</li>
            <li>Freshener Diffuser</li>
          </ul>

          <h3 className="title-h5 footer__title">Service</h3>
          <ul className="footer__list">
            <li>Flower Subcription</li>
            <li>Wedding & Event Decor</li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="title-h5 footer__title">About Us</h3>

          <ul className="footer__list">
            <li>Our story</li>
            <li>Blog</li>
          </ul>

          <ul className="footer__list">
            <li>Shipping & returns</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
