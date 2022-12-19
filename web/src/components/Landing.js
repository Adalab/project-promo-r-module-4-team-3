import { NavLink } from "react-router-dom";
import logoAdaCards from '../images/logo-AdaCards.png';

function Landing() {

  return (
  <main className="landing">
    <img
      className="landingLogo"
      src={logoAdaCards}
      alt="logo de awesome
  profile-cards"
    />
    <section className="landingSection">
      <h1 className="landingSection__title">Crea tu tarjeta de visita</h1>
      <p className="landingSection__text">
        Crea mejores contactos profesionales de forma fácil y cómoda
      </p>
      <div className="landingSection__container">
        <div>
          <i
            className="fa-solid fa-object-ungroup landingSection__container--icon"
          ></i>
          <p className="landingSection__container--text">Diseña</p>
        </div>
        <div>
          <i
            className="fa-regular fa-keyboard landingSection__container--icon"
          ></i>
          <p className="landingSection__container--text">Rellena</p>
        </div>
        <div>
          <i
            className="fa-solid fa-share-nodes landingSection__container--icon"
          ></i>
          <p className="landingSection__container--text">Comparte</p>
        </div>
      </div>
    </section>
    <NavLink className="landingButton landingButton__link" to="/card"
    >Comenzar </NavLink>
  </main>
  )
}

export default Landing;