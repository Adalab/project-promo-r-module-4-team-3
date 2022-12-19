import Header from "./Header";
import Footer from "./Footer";
import CardDisplay from "./CardDisplay";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Card(prop) {
  return (
    <>
      <Header />
      <main className="mainCreate">
        <CardDisplay
          data={prop.data}
          handleReset={prop.handleReset}
          palette={prop.palette}
          cleanLinkedin={prop.cleanLinkedin}
          cleanGithub={prop.cleanGithub}
        />
        <form className="form" action="" method="post">
          <Design
            isDesignOpen={prop.isDesignOpen}
            handleClickSection={prop.handleClickSection}
            data={prop.data}
            handleInput={prop.handleInput}
            setPalette={prop.setPalette}
          />
          <Fill
            data={prop.data}
            handleInput={prop.handleInput}
            isFillOpen={prop.isFillOpen}
            handleClickSection={prop.handleClickSection}
            updateAvatar={prop.updateAvatar}
            avatar={prop.avatar}
          />
          <Share
            apiCard={prop.apiCard}
            handleClickFetch={prop.handleClickFetch}
            isShareOpen={prop.isShareOpen}
            handleClickSection={prop.handleClickSection}
          />
        </form>
      </main>
    </>
  );
}

export default Card;
