function CardDisplay(prop) {
  return (
    <section className="cardDisplay">
      <button
        className="js-resetBtn cardDisplay__reset"
        onClick={prop.handleReset}
      >
        <i className="fa-solid fa-trash-can"></i> Reset
      </button>
      <div className={`js-cardDisplay__card cardDisplay__card ${prop.palette}`}>
        <div className="js-titleWrap titleWrap titleWrapColor">
          <h1 className="nameCardColor js-nameCard cardDisplay__card--name">
            {prop.data.name ? prop.data.name : "Nombre Apellido"}
          </h1>
          <h3 className="js-careerCard cardDisplay__card--profesion">
            {prop.data.job || "Front-end developer"}
          </h3>
        </div>
        <div className="js__profile-image cardDisplay__card--photo">
          {prop.data.photo !== "" ? (
            <img
              className="cardDisplay__card--photo"
              src={prop.data.photo}
              alt="foto de perfil"
            />
          ) : (
            ""
          )}
        </div>
        <ul className="cardDisplay__card--iconList">
          <li className="cardListElement">
            <a
              className={
                "iconColor cardListElement__icon telf " +
                (prop.data.phone ? "" : "not-active")
              }
              href={`tel:${prop.data.phone}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-mobile-screen icon"></i>
            </a>
          </li>
          <li className="cardListElement">
            <a
              className={
                "iconColor cardListElement__icon email " +
                (prop.data.email ? "" : "not-active")
              }
              href={`mailto:${prop.data.email}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
          <li className="cardListElement">
            <a
              className={
                "iconColor cardListElement__icon linkedin " +
                (prop.data.linkedin ? "" : "not-active")
              }
              href={
                !prop.data.linkedin ||
                `https://www.linkedin.com/in/${prop.cleanLinkedin}`
              }
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in icon-dots icon"></i>
            </a>
          </li>
          <li className="cardListElement">
            <a
              className={
                "iconColor cardListElement__icon github " +
                (prop.data.github ? "" : "not-active")
              }
              href={
                !prop.data.github || `https://github.com/${prop.cleanGithub}`
              }
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github-alt icon-dots icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CardDisplay;
