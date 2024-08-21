const list = [
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

export default function Work() {
  return (
    <section className="why-section">
      <div className="why-section__content">
        <h2 className="title-h2 why-section__title">How does it work?</h2>
      </div>

      <div className="why-section__blocks">
        {list.map((item) => (
          <div key={item.title} className="why-section__block">
            <h3 className="title-h3 why-section__block-title">{item.title}</h3>
            <p className="text-body why-section__block-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
