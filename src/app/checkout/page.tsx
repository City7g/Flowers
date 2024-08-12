import BreadCrumbs from '@/components/BreadCrumbs'
import FormCheckoutFirst from '@/components/Form/Checkout/First'
import FormCheckoutGift from '@/components/Form/Checkout/Gift'
import IconLock from '@/components/Icon/Lock'

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__forms">
        <div className="checkout__breadcrumbs">
          <BreadCrumbs />
        </div>

        <div className="checkout__info">
          Already have an account? Log in for faster checkout
        </div>

        <div className="checkout__form">
          <FormCheckoutFirst />
        </div>
      </div>

      <div className="checkout__order">
        <p className="text-overline checkout__title">Order summary</p>

        <div className="checkout-card checkout__card">
          <img src="/checkout.jpg" alt="" className="checkout-card__img" />

          <div className="checkout-card__content">
            <h2 className="text-subtitle checkout-card__title">Snowfall</h2>
            <p className="text-body checkout-card__quantity">Quantity (1)</p>
          </div>

          <p className="text-subtitle checkout-card__price">$100</p>
        </div>

        <div className="checkout__gift">
          <p className="text-body checkout__gift-text">
            If you have our gift card, enter the code to get discounts
          </p>
          <FormCheckoutGift />
        </div>

        <div className="table checkout__table">
          <div className="table__line">
            <p className="text-body">Subtotal</p>
            <p className="text-body">$100.00</p>
          </div>

          <div className="table__line">
            <p className="text-body">Shipping</p>
            <p className="text-body">Calculated at next step</p>
          </div>

          <div className="table__total">
            <p className="text-subtitle">Total</p>
            <p className="title-h5">$100.00</p>
          </div>
        </div>

        <p className="text-caption checkout__secure">
          Secure Checkout
          <IconLock />
        </p>
      </div>
    </div>
  )
}
