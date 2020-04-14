import React from "react";
import PropTypes from "prop-types";

const CardDescription = React.memo(function CardDescription(props) {
  const {isMoviePage} = props;
  return (
      <div className="movie-card__desc">
        <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">Drama</span>
          <span className="movie-card__year">2014</span>
        </p>
        <div className="movie-card__buttons">
          <button className="btn btn--play movie-card__button" type="button">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <button className="btn btn--list movie-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"/>
            </svg>
            <span>My list</span>
          </button>
          {isMoviePage &&  <a href={`add-review.html`} className="btn movie-card__button">Add
            review
          </a>}
        </div>
      </div>
  );
});

CardDescription.propTypes = {
  isMoviePage: PropTypes.bool.isRequired,
};

export default CardDescription;
