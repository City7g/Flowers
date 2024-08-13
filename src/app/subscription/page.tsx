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

      <section className="plans"></section>

      <section className="faq">
        <div className="faq__block">
          <h3 className="title-h2 faq__block-title">Subscription FAQ</h3>

          <Accordion content={faq} />
        </div>
      </section>
    </main>
  )
}
