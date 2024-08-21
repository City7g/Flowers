export default function BreadCrumbs({ className = '' }) {
  return (
    <nav className={className} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb__item">Information</li>
        <li className="breadcrumb__item">Shipping</li>
        <li className="breadcrumb__item active" aria-current="page">
          Payment
        </li>
      </ol>
    </nav>
  )
}
