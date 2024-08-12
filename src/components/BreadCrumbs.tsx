const links = ['Information', 'Shipping', 'Payment']

export default function BreadCrumbs() {
  return (
    <div className="breadcrumbs">
      {links.map((link) => (
        <span className="breadcrumbs__item" key={link}>
          {link}
        </span>
      ))}
    </div>
  )
}
