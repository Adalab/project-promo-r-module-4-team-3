import GetAvatar from "./GetAvatar";
function Fill(prop) {
  const handleChange = (ev) => {
    prop.handleInput({
      name: ev.target.name,
      value: ev.target.value,
    });
  };

  return (
    <fieldset className="js-fieldsetFill fieldset">
      <legend
        className="js-containerLegend js-containerLegendFill containerLegend"
        id="2"
        onClick={prop.handleClickSection}
      >
        <div className="legend__tab">
          <i className="fa-regular fa-keyboard legend__tab--icon"></i>
          <h2 className="legend__tab--title">Rellena</h2>
        </div>
        <i className={`fa-solid fa-chevron-${prop.isFillOpen ? 'up' : 'down'} legend__tab--arrow`}></i>
      </legend>
      <div
        className={`form__contact ${
          prop.isFillOpen ? "" : "hide"
        }`}
      >
        <label className="form__contact--label" htmlFor="name">
          Nombre completo
        </label>
        <input
          className="js-name form__contact--input"
          type="text"
          id="name"
          name="name"
          placeholder="Ej:Saily Jill"
          required
          onChange={handleChange}
          value={prop.data.name}
        />
        <label className="form__contact--label" htmlFor="text">
          Puesto
        </label>
        <input
          className="js-career form__contact--input"
          type="text"
          id="text"
          name="job"
          placeholder="Ej: Front-end unicorn"
          required
          onChange={handleChange}
          value={prop.data.job}
        />
        <label className="form__contact--label" htmlFor="text">
          Imagen de perfil
        </label>
        <div className="form__contact--div">
          <label htmlFor="profileImage" className="add-image">
            <GetAvatar avatar={prop.avatar} updateAvatar={prop.updateAvatar} />
          </label>
        </div>
        <label className="form__contact--label" htmlFor="email">
          Email
        </label>
        <input
          className="js-mailInput form__contact--input"
          type="email"
          id="email"
          name="email"
          placeholder="Ej: sally.hill@gamil.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          onChange={handleChange}
          value={prop.data.email}
        />
        <label className="form__contact--label" htmlFor="tel">
          Teléfono
        </label>
        <input
          className="js-telInput form__contact--input"
          type="tel"
          id="tel"
          name="phone"
          pattern="^[0-9]{9}$"
          placeholder="Ej: 555-55-55-55"
          required
          onChange={handleChange}
          value={prop.data.phone}
        />
        <label className="form__contact--label" htmlFor="text">
          Linkedin
        </label>
        <input
          className="js-linkedinInput form__contact--input"
          type="text"
          id="text"
          name="linkedin"
          placeholder="Ej: sally-hill"
          required
          onChange={handleChange}
          value={prop.data.linkedin}
        />
        <label className="form__contact--label" htmlFor="text">
          Github
        </label>
        <input
          className="js-githubInput form__contact--input"
          type="text"
          id="text"
          name="github"
          placeholder="Ej: sallyhill"
          required
          onChange={handleChange}
          value={prop.data.github}
        />
      </div>
    </fieldset>
  );
}
export default Fill;
