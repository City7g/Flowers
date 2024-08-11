import BreadCrumbs from '@/components/BreadCrumbs'
import FormCheckoutFirst from '@/components/Form/Checkout/First'

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

      <div className="checkout__info">
        <p className="text-overline checkout__title">Order summary</p>
      </div>
    </div>
  )
}
