export default function IndexSubcriptions() {
  return (
    <div className="subcriptions">
      <div className="subcriptions__image">
        <img
          className="subcriptions__img"
          src="/ServiceSection/service.png"
          alt="flower-img"
        />
      </div>

      <div className="subcriptions__content">
        <h3 className="text-overline subcriptions__subtitle">service</h3>
        <h2 className="title-h2 subcriptions__title">Flower Subcriptions</h2>
        <p className="text-body subcriptions__text">
          Experience the convenience and savings of regular flower deliveries
          with our flexible subscription service - up to 30% more profitable
          than one-time purchases.
        </p>
        <button className="btn-secondary subcriptions__btn">
          Subscribe Now
        </button>
      </div>
    </div>
  )
}
