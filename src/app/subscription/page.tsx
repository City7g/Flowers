import Image from 'next/image'
import Accordion from '@/components/Accordion'
import Quantity from '@/components/Quantity'
import planImage from '../../../public/plans.jpg'
import subscriptionImage from '../../../public/subscription-first.jpg'
import plan1 from '../../../public/plans/plan-1.jpg'
import plan2 from '../../../public/plans/plan-2.jpg'
import plan3 from '../../../public/plans/plan-3.jpg'

const content = [
  {
    id: 0,
    title: 'Choose a plan',
    text: 'Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.',
  },
  {
    id: 1,
    title: 'Frequency and Duration',
    text: 'Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.',
  },
  {
    id: 2,
    title: 'Pay once',
    text: 'After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones',
  },
]

const faq = [
  'How often will I get a new bouquet?',
  'Can i send subscription like as a gift?',
  'Can I choose which bouquet I get?',
  'Can I change the shipping address?',
  'What day will the subscription bouquet come?',
  'Can I suspend my subscription to flowers?',
]

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

export default function Subscription() {
  return (
    <main>
      <section className="subscription">
        <div className="subscription__image">
          <Image src={subscriptionImage} alt="" className="subscription__img" />
        </div>

        <div className="subscription__content">
          <h1 className="title-h2 subscription__title">Flower Subscription</h1>

          <p className="title-h6 subscription__text">For Yourself</p>
          <ul className="text-body subscription__list">
            <li>
              The perfect way to keep your home fresh and beautiful. Get a
              regular delivery of stunning bouquets straight to your doorstep
              without lifting a finger. Enjoy the beauty and fragrance of fresh
              flowers hassle-free!
            </li>
          </ul>

          <p className="title-h6 subscription__text">As a Gift</p>
          <ul className="text-body subscription__list">
            <li>
              Simply provide us with their address and let us take care of the
              rest, delivering beautiful blooms straight to their doorstep at
              the frequency and duration of your choosing.
            </li>
          </ul>

          <p className="title-h6 subscription__text">For Business</p>
          <ul className="text-body subscription__list">
            <li>
              Is a great way to create a pleasant atmosphere and leave a good
              impression on your guests and customers. Fresh floral arrangements
              will improve the aesthetic image of your business, and our service
              guarantees timely replacement without extra care or effort on your
              part.
            </li>
          </ul>

          <button className="btn-secondary subscription__btn">
            Explore Plans
          </button>
        </div>
      </section>

      <section className="why-section">
        <h2 className="title-h2 why-section__title">How does it work?</h2>

        <div className="why-section__blocks">
          {content.map((item) => (
            <div key={item.title} className="why-section__block">
              <h3 className="title-h3 why-section__block-title">
                {item.title}
              </h3>
              <p className="text-body why-section__block-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="plans">
        <div className="plans__content">
          <h3 className="text-overline plans__subtitle">
            Build Your Subscription
          </h3>
          <h2 className="title-h3 plans__title">Selecting a Plan</h2>
          <p className="text-body plans__text">
            Enjoy free shipping on every order and save up to 30%. Every bouquet
            we deliver is carefully curated to ensure it arrives fresh and
            stunning. To modify, pause, or cancel your subscription, simply log
            in to your account dashboard. You&apos;re in complete control of
            your flower delivery experience.
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
            <p className="text-body plans__text">
              Select the delivery frequency
            </p>
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
            <Quantity />
          </div>

          <button className="btn-primary plans__btn">Checkout</button>
        </div>

        <div className="plans__image">
          <Image src={planImage} alt="" className="plans__img" />
        </div>
      </section>

      <section className="faq">
        <div className="faq__block">
          <h3 className="title-h2 faq__block-title">Subscription FAQ</h3>

          <Accordion content={faq} />
        </div>
      </section>
    </main>
  )
}
