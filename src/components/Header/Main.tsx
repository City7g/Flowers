import IconBag from '../Icon/Bag'
import Burger from './Burger'

export default function Header() {
  return (
    <header className="header">
      <p className="header__link">Shop</p>
      <p className="header__link">Contact</p>
      <p className="header__link">Sing in</p>
      <p className="header__link">Cart</p>

      <Burger />
      <div className="bag">
        <IconBag />
      </div>
    </header>
  )
}
