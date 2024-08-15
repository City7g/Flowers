export default function CategoryCard({ imgSrc, price, title }) {
  return (
    <div className="category-card">
      <img className="category-card__img" src={imgSrc} alt="img" />
      <div className="category-card__content">
        <h6 className="title-h6 category-card__title">{title}</h6>
        <p className="text-caption category-card__price">price {price}$</p>
      </div>
    </div>
  )
}