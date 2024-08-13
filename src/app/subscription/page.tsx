import Accordion from '@/components/Accordion'

const content = [
  {
    title: 'Choose a plan',
    text: 'Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.',
  },
  {
    title: 'Frequency and Duration',
    text: 'Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.',
  },
  {
    title: 'Pay once',
    text: 'After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones',
  },
]

const faq = [
  'How often will I get a new bouquet?',
  'Can i send subscription like as a gift ?',
  'Can I choose which bouquet I get ?',
  'Can I change the shipping address ?',
  'What day will the subscription bouquet come?',
  'Can I suspend my subscription to flowers ?',
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
  },
]

export default function Subscription() {
  return (
    <main>
      <section className="subscription">
        <div className="subscription__image">
          <img
            src="/subscription-first.jpg"
            alt=""
            className="subscription__img"
          />
        </div>

        <div className="subscription__content">
          <h1 className="title-h2 subscription__title">Flower Subscription</h1>

          <p className="subscription__text">For Yourself</p>
          <ul className="subscription__list">
            <li>
              The perfect way to keep your home fresh and beautiful. Get a
              regular delivery of stunning bouquets straight to your doorstep
              without lifting a finger. Enjoy the beauty and fragrance of fresh
              flowers hassle-free!
            </li>
          </ul>

          <p className="subscription__text">As a Gift</p>
          <ul className="subscription__list">
            <li>
              Simply provide us with their address and let us take care of the
              rest, delivering beautiful blooms straight to their doorstep at
              the frequency and duration of your choosing.
            </li>
          </ul>

          <p className="subscription__text">For Business</p>
          <ul className="subscription__list">
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

          {plans.map((item) => (
            <div key={item.id} className="plan">
              <div className="plan__top">
                <img
                  src={`/plans/plan-${item.id + 1}.jpg`}
                  alt=""
                  className="plan__img"
                />

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

          <button className="btn-primary plans__btn">Checkout</button>
        </div>

        <div className="plans__image">
          <img src="/plans.jpg" alt="" className="plans__img" />
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
