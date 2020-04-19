import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CardHeader from "../card-header/card-header.jsx";
import CardDescription from "../card-description/card-description.jsx";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import PageContent from "../page-content/page-content.jsx";
import FilmsList from "../films-list/films-list.jsx";
import {Pages} from "../../const.js";
import {getFilms} from "../../reducer/data/data-selectors.js";

const MoviePage = React.memo(function MoviePage(props) {
  const {currentTab, films} = props;
  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <CardHeader
            authorizationStatus={`NO_AUTH`}
            currentPage={Pages.MOVIE_PAGE}
          />
          <div className="movie-card__wrap">
            <CardDescription
              isMoviePage={true}
            />
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/the-grand-budapest-hotel-poster.jpg`} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              {currentTab === `overview` && <Overview />}
              {currentTab === `details` && <Details />}
              {currentTab === `reviews` && <MovieReviews />}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <PageContent>
          <FilmsList
            films={films}
          />
        </PageContent>
      </div>
    </Fragment>
  );
});

MoviePage.propTypes = {
  currentTab: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }))
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export {MoviePage};

export default connect(mapStateToProps)(MoviePage);
