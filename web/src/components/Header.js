import { NavLink } from 'react-router-dom';
import logoAdaCards from '../images/logo-AdaCards.png';
function Header() {
return (<header className="header">
        <NavLink to="/" className="header__link">
          <img
            className="header__img"
            src={logoAdaCards}
            alt="logo Awesome profile cards"
            title="logo Awesome profile cards"
          />
        </NavLink>
      </header>)
    }

export default Header