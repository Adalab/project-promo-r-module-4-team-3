function Design(prop){
  const handleChange = (ev) => {
    prop.handleInput({
      name: ev.target.name,
      value: ev.target.value
    })
  }
  const handleClick = (ev) => {
    prop.setPalette(`palette${ev.currentTarget.value}`)
  };

    return (  <fieldset className="fieldset">
    <legend className="js-containerLegend containerLegend" id='1' onClick={prop.handleClickSection}>
      <div className="legend__tab">
        <i className="fa-solid fa-object-ungroup legend__tab--icon"></i>
        <h2 className="legend__tab--title">Diseña</h2>
      </div>
      <i className={`fa-solid fa-chevron-${prop.isDesignOpen ? 'up' : 'down'} legend__tab--arrow`}></i>
    </legend>
    <div className={`palettes ${prop.isDesignOpen ? '' : 'hide'}`}>
      <label className="palettes__text" htmlFor="color">
        Colores
      </label>
      <div className="palettes__options">
        <div className="aqua colorContainer">
          <input
            className="js-palette1 inputColor"
            checked={prop.data.palette === '1'}
            type="radio"
            id="color1"
            name="palette"
            value="1"
            onChange={handleChange}
            onClick={handleClick}
          />
          <div className="colorBox aqua-1"></div>
          <div className="colorBox aqua-2"></div>
          <div className="colorBox aqua-3"></div>
        </div>
        <div className="red colorContainer">
          <input
            className="js-palette2 inputColor"
            checked={prop.data.palette === '2'}
            type="radio"
            id="color2"
            name="palette"
            value="2"
            onChange={handleChange}
            onClick={handleClick}
          />
          <div className="colorBox red-1"></div>
          <div className="colorBox red-2"></div>
          <div className="colorBox red-3"></div>
        </div>
        <div className="blueandbeige colorContainer">
          <input
            className="js-palette3 inputColor"
            checked={prop.data.palette === '3'}
            type="radio"
            id="color3"
            name="palette"
            value="3"
            onChange={handleChange}
            onClick={handleClick}
          />
          <div className="colorBox blueandbeige-1"></div>
          <div className="colorBox blueandbeige-2"></div>
          <div className="colorBox blueandbeige-3"></div>
        </div>
      </div>
    </div>
  </fieldset>)
}
export default Design