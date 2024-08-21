export default function Popup({
  children,
  isShow,
  className = '',
  clickOutside = null,
  side = '',
}) {
  return (
    <div
      onClick={clickOutside}
      className={`popup ${isShow ? 'show' : ''} ${
        side ? `popup--${side}` : ''
      }`}
    >
      <div className={`popup__content ${className ?? ''}`}>{children}</div>
    </div>
  )
}
