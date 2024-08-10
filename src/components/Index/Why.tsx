const content = [
  {
    title: 'Stylish bouquets by florists',
    text: 'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.',
  },
  {
    title: 'On-time delivery',
    text: 'Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.',
  },
  {
    title: 'Safe payment',
    text: 'You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.',
  },
  {
    title: 'Subscription by your needs',
    text: "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.",
  },
]

export default function Why() {
  return (
    <div className="why-section">
      <h2 className="title-h2 why-section__title">Why choose us ?</h2>

      <div className="why-section__blocks">
        {content.map(item => (
          <div key={item.title} className="why-section__block">
            <h3 className="title-h3 why-section__block-title">{item.title}</h3>
            <p className="text-body why-section__block-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
