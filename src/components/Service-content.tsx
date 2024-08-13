
export default function ServiceContent({ modificator }) {
  return (
    <div
      className={`service__content ${
        modificator ? 'service__content--white' : ''
      }`}
    >
      <p className="text-overline service__subtitle">service</p>
      <h2 className="title-h2 service__title">
        {modificator ? 'Wedding & Event Decor' : 'Flower Subscriptions'}
      </h2>
      <p className="text-subtitle service__text">
        {modificator
          ? 'Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.'
          : 'Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.'}
      </p>
      <button className={`service__btn ${modificator ? 'btn-tertiary' : 'btn-secondary'}`}>
        {modificator ? 'Inquire Now' : 'Subscribe Now'}
      </button>
    </div>
  )
}