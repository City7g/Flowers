import Image from 'next/image'
import Quantity from '@/components/Quantity'
import image from '@/assets/plans.jpg'
import plan1 from '@/assets/plans/plan-1.jpg'
import plan2 from '@/assets/plans/plan-2.jpg'
import plan3 from '@/assets/plans/plan-3.jpg'

const plans = [
  {
    id: 0,
    name: 'Classic',
    benefits: [
      'Price $45',
      'Free Delivery',
      'Best for a budget',
      'Glass vase with first delivery',
      'Save up to 25%',
    ],
    img: plan1,
  },
  {
    id: 1,
    name: 'Seasonal',
    benefits: [
      'Price $65',
      'Free Delivery',
      'Best seasonal selections',
      'Glass vase with first delivery',
      'Luxury candle with your first delivery',
      'Save up to 28%',
    ],
    img: plan2,
  },
  {
    id: 2,
    name: 'Luxe',
    benefits: [
      'Price $95',
      'Free Delivery',
      'Premium arrangement',
      'Premium vase with first delivery',
      'Luxury candle with your first delivery',
      'Save up to 30%',
    ],
    img: plan3,
  },
]

export default function Plans() {
  return (
    <section className="plans">
      <div className="plans__content">
        <h3 className="text-overline plans__subtitle">
          Build Your Subscription
        </h3>
        <h2 className="title-h3 plans__title">Selecting a Plan</h2>
        <p className="text-body plans__text">
          Enjoy free shipping on every order and save up to 30%. Every bouquet
          we deliver is carefully curated to ensure it arrives fresh and
          stunning. To modify, pause, or cancel your subscription, simply log in
          to your account dashboard. You&apos;re in complete control of your
          flower delivery experience.
        </p>

        <div className="plans__plans">
          {plans.map((item) => (
            <div key={item.id} className="plan">
              <div className="plan__top">
                <Image src={item.img} alt="" className="plan__img" />

                <div className="plan__content">
                  <h4 className="text-subtitle plan__name">{item.name}</h4>

                  <ul className="plan__list">
                    {item.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="btn-primary plan__btn">Select</button>
            </div>
          ))}
        </div>

        <div className="plans__block">
          <h3 className="title-h4 plans__heading">
            How often do you want flowers delivered?
          </h3>
          <p className="text-body plans__text">Select the delivery frequency</p>
          <div className="plans__btns">
            <div className="btn-secondary">Monthly</div>
            <div className="btn-secondary">Bi-Weekly</div>
            <div className="btn-secondary">Weekly</div>
          </div>
        </div>

        <div className="plans__block">
          <h3 className="title-h4 plans__heading">
            How many deliveries would you like ?
          </h3>
          <p className="text-body plans__text">
            Pay once and do not worry about flowers, our bouquets will be
            beautiful and on time, as many times as you need{' '}
          </p>
          <Quantity className="plans__quantity" />
        </div>

        <button className="btn-primary plans__btn">Checkout</button>
      </div>

      <div className="plans__image">
        <Image src={image} alt="" className="plans__img" />
      </div>
    </section>
  )
}
