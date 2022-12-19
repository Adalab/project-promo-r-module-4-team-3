function Share(prop) {
  const handleShare = (ev) => {
    ev.preventDefault();
    prop.handleClickFetch();
  };
  return (
    <fieldset className="fieldset">
      <legend className="js-containerLegend js-containerLegendShare containerLegend" id='3' onClick={prop.handleClickSection}>
        <div className="legend__tab">
          <i className="fa-solid fa-share-nodes legend__tab--icon"></i>
          <h2 className="legend__tab--title">Comparte</h2>
        </div>
        <i className={`fa-solid fa-chevron-${prop.isShareOpen ? 'up' : 'down'} legend__tab--arrow`}></i>
      </legend>
      <div className={`shareTwitter shareTwitter1 ${prop.isShareOpen ? '' : 'hide'}`}>
        <button
          className="js-btn-create shareTwitter__buttoncreate btnOrange"
          type="button"
          title="¡Crea tu tarjeta!"
          onClick={handleShare}
        >
          <i className="fa-regular fa-address-card shareTwitter__buttoncreate--icon"></i>
          <span className="shareTwitter__buttoncreate--text">
            Crear tarjeta
          </span>
        </button>
      </div>
      <div className={`shareTwitter shareTwitter2 ${prop.apiCard.success || 'hide'}`}>
        <h4 className="shareTwitter__text">La tarjeta ha sido creada:</h4>
        <a
          className="js-cardLink shareTwitter__link"
          title="¡Aquí tienes tu tarjeta!"
          href={prop.apiCard.success && prop.apiCard.cardURL}
          target="_blank"
          rel="noreferrer"
        >
          {prop.apiCard.success ? prop.apiCard.cardURL : prop.apiCard.error}
        </a>
        <a
          className="js-twitterBtn shareTwitter__buttonshare"
          title="Tu tarjeta en un tweet"
          href={prop.apiCard.success && `https://twitter.com/intent/tweet?text=Aquí%20está%20mi%20tarjeta%20de%20visita%20creada%20con%20AdaCards&url=${prop.apiCard.cardURL}&hashtags=businesscard,adacards`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter shareTwitter__buttonshare--icon"></i>
          <span className="shareTwitter__buttonshare--text">
            Compartir en twitter
          </span>
        </a>
      </div>
    </fieldset>
  );
}

export default Share;
