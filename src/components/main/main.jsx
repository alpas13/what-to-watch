import React, {Fragment} from "react";
import PropTypes from "prop-types";
import CardHeader from "../card-header/card-header.jsx";
import CardDescription from "../card-description/card-description.jsx";
import PageContent from "../page-content/page-content.jsx";
import Genre from "../genre/genre.jsx";
import FilmsList from "../films-list/films-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import {Pages} from "../../const.js";
import films from "../../mocks/films.js";

const Main = React.memo(function Main() {

  return (
    <Fragment>
      <section className="movie-card">
        <CardHeader
          authorizationStatus={`NO_AUTH`}
          currentPage={Pages.MAIN}
        />
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={`img/the-grand-budapest-hotel-poster.jpg`} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>
            <CardDescription
              isMoviePage={false}
            />
          </div>
        </div>
      </section>
      <div className="page-content">
        <PageContent>
          <Genre/>
          <FilmsList
            films={films}
          />
          <ShowMoreButton/>
        </PageContent>
      </div>
    </Fragment>
  );
});

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  })),
};

export default Main;
