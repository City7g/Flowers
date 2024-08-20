export default function ProductCategory({ className = '' }) {
  return (
    <nav aria-label="breadcrumb" className={className}>
      <ol className="text-overline product-category">
        <li className="product-category__item">Fresh Flowers</li>

        <li className="product-category__item active" aria-current="page">
          Rosy Delight
        </li>
      </ol>
    </nav>
  )
}
